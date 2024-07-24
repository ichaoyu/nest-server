"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthGuard", {
    enumerable: true,
    get: function() {
        return AuthGuard;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _core = require("@nestjs/core");
const _jwt = require("@nestjs/jwt");
const _constants = require("../constants");
const _decorators = require("../decorators");
const _interfaces = require("../interfaces");
const _shared = require("../shared");
const _utils = require("../utils");
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
let AuthGuard = class AuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const apiPath = this.configService.get('app.apiPath');
        const permission = this.reflector.get(_decorators.Permission, context.getHandler());
        const isApi = request.url.includes(apiPath);
        const isPublic = this.reflector.getAllAndOverride(_decorators.Public, [
            context.getHandler(),
            context.getClass()
        ]);
        // 匹配路径
        if (!isApi || isPublic) {
            return true;
        }
        // 请求头没有登录凭证
        if (!request.headers.authorization) {
            throw new _common.UnauthorizedException(_constants.MESSAGES.AUTHORIZATION_NOT_EXIST);
        }
        const parts = request.headers.authorization.trim().split(' ');
        // 请求头没有登录凭证
        if (parts.length !== 2) {
            throw new _common.UnauthorizedException(_constants.MESSAGES.AUTHORIZATION_NOT_EXIST);
        }
        const [scheme, token] = parts;
        if (/^Bearer$/i.test(scheme)) {
            try {
                const res = await this.jwtService.verify(token, {
                    complete: true
                });
                if (typeof res !== 'string') {
                    const key = _utils.CacheUtil.getTokenKey(res.payload.sub);
                    const onlineInfo = await this.cacheManager.get(key);
                    if (!onlineInfo) {
                        throw new _common.UnauthorizedException(_constants.MESSAGES.AUTHORIZATION_NOT_CORRECT);
                    }
                    this.contextService.setPayload(res.payload);
                    await this.contextService.setUser(res.payload);
                    if (!permission) {
                        return true;
                    }
                    const { permissions } = this.contextService.getUserWithPermission();
                    // 管理员权限不做处理
                    if (permissions.includes(_constants.EXTRAS.ADMIN_PERMISSION)) {
                        return true;
                    }
                    // 没有权限时抛出错误
                    if (!permissions.includes(permission)) {
                        throw new _common.ForbiddenException(`${_constants.MESSAGES.NO_ACCESS} - ${request.method} ${request.url}`);
                    }
                    return true;
                }
            } catch (error) {
                throw new _common.UnauthorizedException(_constants.MESSAGES.AUTHORIZATION_EXPIRED);
            }
        } else {
            throw new _common.UnauthorizedException(_constants.MESSAGES.AUTHORIZATION_NOT_CORRECT);
        }
        return true;
    }
    constructor(cacheManager, configService, contextService, jwtService, reflector){
        this.cacheManager = cacheManager;
        this.configService = configService;
        this.contextService = contextService;
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
};
AuthGuard = _ts_decorate([
    (0, _common.Injectable)({
        scope: _common.Scope.REQUEST
    }),
    _ts_param(0, (0, _common.Inject)(_cachemanager.CACHE_MANAGER)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _interfaces.ICacheManager === "undefined" ? Object : _interfaces.ICacheManager,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _core.Reflector === "undefined" ? Object : _core.Reflector
    ])
], AuthGuard);

//# sourceMappingURL=auth.guard.js.map