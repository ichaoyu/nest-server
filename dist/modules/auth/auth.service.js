"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _bull = require("@nestjs/bull");
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _jwt = require("@nestjs/jwt");
const _typeorm = require("@nestjs/typeorm");
const _bull1 = require("bull");
const _typeorm1 = require("typeorm");
const _captcha = require("../../shared/captcha");
const _constants = require("../../constants");
const _database = require("../../database");
const _interfaces = require("../../interfaces");
const _shared = require("../../shared");
const _utils = require("../../utils");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let AuthService = class AuthService {
    // #region 登录
    async handleLogin(dto) {
        const { captchaId, captchaValue, userName, password } = dto;
        const passed = await this.captchaService.check(captchaId, captchaValue);
        if (!passed && !_utils.SysUtil.isTesting) {
            throw new _common.BadRequestException(_constants.MESSAGES.CAPTCHA_NOT_CORRECT);
        }
        const existUser = await this.userModel.createQueryBuilder('user').leftJoinAndSelect('user.dept', 'dept').select([
            'user',
            'dept.id',
            'dept.deptName'
        ]).addSelect('user.password').where({
            userName,
            delFlag: _constants.ENTITY_DEL_FLAG.EXIST
        }).getOne();
        if (!existUser) {
            throw new _common.BadRequestException(_constants.MESSAGES.USER_NOT_EXIST);
        }
        const isMatch = await _utils.HashUtil.compare(password, existUser.password);
        const deptName = existUser.dept ? existUser.dept.deptName : '';
        const loginDate = new Date();
        const ip = this.contextService.getIP();
        const userAgent = this.contextService.getUA();
        const tokenId = _utils.ProxyUtil.generateID();
        const userId = existUser.id;
        //#region 保存登录日志
        if (!isMatch) {
            this.loginLogQueue.add({
                userName,
                status: _constants.ENTITY_LOGIN_STATUS.FAIL,
                msg: _constants.MESSAGES.ACCOUNT_OR_PASSWORD_ERROR,
                loginDate,
                ip,
                userAgent
            });
            throw new _common.BadRequestException(_constants.MESSAGES.ACCOUNT_OR_PASSWORD_ERROR);
        }
        const loginLogJob = await this.loginLogQueue.add({
            userName,
            status: _constants.ENTITY_LOGIN_STATUS.SUCCESS,
            msg: _constants.MESSAGES.LOGIN_SUCCESS,
            loginDate,
            ip,
            userAgent
        });
        const jobRes = await loginLogJob.finished();
        //#endregion
        await this.userModel.update(userId, {
            loginDate,
            loginIp: jobRes.loginIp
        });
        //#region 缓存Token
        const isSoloLogin = await this.sharedService.isSoloLogin();
        const ttl = this.configService.get('jwt.signOptions.expiresIn');
        if (isSoloLogin) {
            const userKey = _utils.CacheUtil.getUserKey(userId);
            const oldTokenId = await this.cacheManager.get(userKey);
            if (oldTokenId) {
                await this.cacheManager.del(_utils.CacheUtil.getTokenKey(oldTokenId));
            }
            await this.cacheManager.set(userKey, tokenId, ttl);
        }
        await this.cacheManager.set(_utils.CacheUtil.getTokenKey(tokenId), {
            tokenId,
            userId,
            userName,
            deptName,
            loginDate,
            ...jobRes
        }, ttl);
        //#endregion
        return this.jwtService.sign({
            userName,
            userId,
            sub: tokenId
        });
    }
    // #endregion 登录
    // #region 退出登录
    async handleLogout() {
        const isSoloLogin = await this.sharedService.isSoloLogin();
        const payload = this.contextService.getPayload();
        // 判断 token 是否已过期
        if (payload) {
            const tokenKey = _utils.CacheUtil.getTokenKey(payload.sub);
            // 判断是否启用单客户端登录
            if (isSoloLogin) {
                const { userId } = await this.cacheManager.get(tokenKey);
                const userKey = _utils.CacheUtil.getUserKey(userId);
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
            size: 4
        });
    }
    constructor(cacheManager, captchaService, userModel, loginLogQueue, jwtService, configService, contextService, sharedService){
        this.cacheManager = cacheManager;
        this.captchaService = captchaService;
        this.userModel = userModel;
        this.loginLogQueue = loginLogQueue;
        this.jwtService = jwtService;
        this.configService = configService;
        this.contextService = contextService;
        this.sharedService = sharedService;
    }
};
AuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_cachemanager.CACHE_MANAGER)),
    _ts_param(1, (0, _common.Inject)(_constants.CAPTCHA_SERVICE)),
    _ts_param(2, (0, _typeorm.InjectRepository)(_database.SysUserEntity)),
    _ts_param(3, (0, _bull.InjectQueue)(_constants.QUEUES.LOGIN_LOG)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _interfaces.ICacheManager === "undefined" ? Object : _interfaces.ICacheManager,
        typeof _captcha.CaptchaService === "undefined" ? Object : _captcha.CaptchaService,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _bull1.Queue === "undefined" ? Object : _bull1.Queue,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService,
        typeof _shared.SharedService === "undefined" ? Object : _shared.SharedService
    ])
], AuthService);

//# sourceMappingURL=auth.service.js.map