import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';

import { EXTRAS, MESSAGES } from '@/constants';
import { Permission } from '@/decorators';
import { ICacheManager } from '@/interfaces';
import { SharedService } from '@/shared';
import { CacheUtil } from '@/utils';

/**
 * 登录守卫
 */
@Injectable()
export class WsAuthGuard implements CanActivate {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: ICacheManager,
    private jwtService: JwtService,
    private reflector: Reflector,
    private sharedService: SharedService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const ctx = context.switchToWs();
    const data = ctx.getData();
    const pattern = ctx.getPattern();
    const permission = this.reflector.get(Permission, context.getHandler());

    if (!data.headers?.authorization) {
      throw new WsException({
        code: HttpStatus.UNAUTHORIZED,
        msg: MESSAGES.AUTHORIZATION_NOT_EXIST,
      });
    }

    const parts = data.headers.authorization.trim().split(' ');

    // 请求头没有登录凭证
    if (parts.length !== 2) {
      throw new WsException({
        code: HttpStatus.UNAUTHORIZED,
        msg: MESSAGES.AUTHORIZATION_NOT_EXIST,
      });
    }

    const [scheme, token] = parts;

    if (/^Bearer$/i.test(scheme)) {
      try {
        const res = await this.jwtService.verify(token, {
          complete: true,
        });

        if (typeof res !== 'string') {
          const key = CacheUtil.getTokenKey(res.payload.sub);
          const onlineInfo = await this.cacheManager.get<any>(key);

          if (!onlineInfo) {
            throw new WsException({
              code: HttpStatus.UNAUTHORIZED,
              msg: MESSAGES.AUTHORIZATION_NOT_CORRECT,
            });
          }

          if (!permission) {
            return true;
          }

          const user = await this.sharedService.getUserWithDeptRolesByPayload(
            res.payload,
            'ws',
          );
          const { permissions } =
            this.sharedService.getUserWithPermission(user);

          // 管理员权限不做处理
          if (permissions.includes(EXTRAS.ADMIN_PERMISSION)) {
            return true;
          }
          // 没有权限时抛出错误
          if (!permissions.includes(permission)) {
            throw new WsException({
              code: HttpStatus.FORBIDDEN,
              msg: `${MESSAGES.NO_ACCESS} - ${pattern}`,
            });
          }
          return true;
        }
      } catch (error) {
        throw new WsException({
          code: HttpStatus.UNAUTHORIZED,
          msg: MESSAGES.AUTHORIZATION_EXPIRED,
        });
      }
    } else {
      throw new WsException({
        code: HttpStatus.UNAUTHORIZED,
        msg: MESSAGES.AUTHORIZATION_NOT_CORRECT,
      });
    }

    return true;
  }
}
