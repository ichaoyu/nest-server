import { InjectQueue } from '@nestjs/bull';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Repository } from 'typeorm';

import { CaptchaService } from '@/shared/captcha';
import {
  QUEUES,
  ENTITY_DEL_FLAG,
  ENTITY_LOGIN_STATUS,
  MESSAGES,
  CAPTCHA_SERVICE,
} from '@/constants';
import { SysUserEntity } from '@/database';
import { ICacheManager, IOnlineInfo } from '@/interfaces';
import { ContextService, SharedService } from '@/shared';
import { CacheUtil, HashUtil, ProxyUtil, SysUtil } from '@/utils';

import { LoginDTO } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: ICacheManager,
    @Inject(CAPTCHA_SERVICE)
    private captchaService: CaptchaService,
    @InjectRepository(SysUserEntity)
    private userModel: Repository<SysUserEntity>,
    @InjectQueue(QUEUES.LOGIN_LOG)
    private loginLogQueue: Queue,
    private jwtService: JwtService,
    private configService: ConfigService,
    private contextService: ContextService,
    private sharedService: SharedService,
  ) {}

  // #region 登录
  async handleLogin(dto: LoginDTO) {
    const { captchaId, captchaValue, userName, password } = dto;
    const passed = await this.captchaService.check(captchaId, captchaValue);
    if (!passed && !SysUtil.isTesting) {
      throw new BadRequestException(MESSAGES.CAPTCHA_NOT_CORRECT);
    }

    const existUser = await this.userModel
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.dept', 'dept')
      .select(['user', 'dept.id', 'dept.deptName'])
      .addSelect('user.password')
      .where({
        userName,
        delFlag: ENTITY_DEL_FLAG.EXIST,
      })
      .getOne();

    if (!existUser) {
      throw new BadRequestException(MESSAGES.USER_NOT_EXIST);
    }

    const isMatch = await HashUtil.compare(password, existUser.password);
    const deptName = existUser.dept ? existUser.dept.deptName : '';
    const loginDate = new Date();
    const ip = this.contextService.getIP();
    const userAgent = this.contextService.getUA();
    const tokenId = ProxyUtil.generateID();
    const userId = existUser.id;

    //#region 保存登录日志

    if (!isMatch) {
      this.loginLogQueue.add({
        userName,
        status: ENTITY_LOGIN_STATUS.FAIL,
        msg: MESSAGES.ACCOUNT_OR_PASSWORD_ERROR,
        loginDate,
        ip,
        userAgent,
      });

      throw new BadRequestException(MESSAGES.ACCOUNT_OR_PASSWORD_ERROR);
    }

    const loginLogJob = await this.loginLogQueue.add({
      userName,
      status: ENTITY_LOGIN_STATUS.SUCCESS,
      msg: MESSAGES.LOGIN_SUCCESS,
      loginDate,
      ip,
      userAgent,
    });

    const jobRes = await loginLogJob.finished();

    //#endregion

    await this.userModel.update(userId, {
      loginDate,
      loginIp: jobRes.loginIp,
    });

    //#region 缓存Token
    const isSoloLogin = await this.sharedService.isSoloLogin();
    const ttl = this.configService.get<number>('jwt.signOptions.expiresIn');
    if (isSoloLogin) {
      const userKey = CacheUtil.getUserKey(userId);
      const oldTokenId = await this.cacheManager.get<string>(userKey);
      if (oldTokenId) {
        await this.cacheManager.del(CacheUtil.getTokenKey(oldTokenId));
      }
      await this.cacheManager.set(userKey, tokenId, ttl);
    }
    await this.cacheManager.set(
      CacheUtil.getTokenKey(tokenId),
      {
        tokenId,
        userId,
        userName,
        deptName,
        loginDate,
        ...jobRes,
      },
      ttl,
    );
    //#endregion
    return this.jwtService.sign({ userName, userId, sub: tokenId });
  }
  // #endregion 登录

  // #region 退出登录
  async handleLogout() {
    const isSoloLogin = await this.sharedService.isSoloLogin();
    const payload = this.contextService.getPayload();
    // 判断 token 是否已过期
    if (payload) {
      const tokenKey = CacheUtil.getTokenKey(payload.sub);
      // 判断是否启用单客户端登录
      if (isSoloLogin) {
        const { userId } = await this.cacheManager.get<IOnlineInfo>(tokenKey);
        const userKey = CacheUtil.getUserKey(userId);
        await this.cacheManager.del(userKey);
      }
      await this.cacheManager.del(tokenKey);
    }
  }
  // #endregion 退出登录

  // #region 获取验证码
  async handleGetCaptcha() {
    return await this.captchaService.image({
      width: 90,
      height: 40,
      noise: 2,
      size: 4,
    });
  }
}
