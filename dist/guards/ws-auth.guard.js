"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WsAuthGuard", {
    enumerable: true,
    get: function() {
        return WsAuthGuard;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _jwt = require("@nestjs/jwt");
const _websockets = require("@nestjs/websockets");
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
let WsAuthGuard = class WsAuthGuard {
    async canActivate(context) {
        const ctx = context.switchToWs();
        const data = ctx.getData();
        const pattern = ctx.getPattern();
        const permission = this.reflector.get(_decorators.Permission, context.getHandler());
        if (!data.headers?.authorization) {
            throw new _websockets.WsException({
                code: _common.HttpStatus.UNAUTHORIZED,
                msg: _constants.MESSAGES.AUTHORIZATION_NOT_EXIST
            });
        }
        const parts = data.headers.authorization.trim().split(' ');
        // 请求头没有登录凭证
        if (parts.length !== 2) {
            throw new _websockets.WsException({
                code: _common.HttpStatus.UNAUTHORIZED,
                msg: _constants.MESSAGES.AUTHORIZATION_NOT_EXIST
            });
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
                        throw new _websockets.WsException({
                            code: _common.HttpStatus.UNAUTHORIZED,
                            msg: _constants.MESSAGES.AUTHORIZATION_NOT_CORRECT
                        });
                    }
                    if (!permission) {
                        return true;
                    }
                    const user = await this.sharedService.getUserWithDeptRolesByPayload(res.payload, 'ws');
                    const { permissions } = this.sharedService.getUserWithPermission(user);
                    // 管理员权限不做处理
                    if (permissions.includes(_constants.EXTRAS.ADMIN_PERMISSION)) {
                        return true;
                    }
                    // 没有权限时抛出错误
                    if (!permissions.includes(permission)) {
                        throw new _websockets.WsException({
                            code: _common.HttpStatus.FORBIDDEN,
                            msg: `${_constants.MESSAGES.NO_ACCESS} - ${pattern}`
                        });
                    }
                    return true;
                }
            } catch (error) {
                throw new _websockets.WsException({
                    code: _common.HttpStatus.UNAUTHORIZED,
                    msg: _constants.MESSAGES.AUTHORIZATION_EXPIRED
                });
            }
        } else {
            throw new _websockets.WsException({
                code: _common.HttpStatus.UNAUTHORIZED,
                msg: _constants.MESSAGES.AUTHORIZATION_NOT_CORRECT
            });
        }
        return true;
    }
    constructor(cacheManager, jwtService, reflector, sharedService){
        this.cacheManager = cacheManager;
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.sharedService = sharedService;
    }
};
WsAuthGuard = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_cachemanager.CACHE_MANAGER)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _interfaces.ICacheManager === "undefined" ? Object : _interfaces.ICacheManager,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _core.Reflector === "undefined" ? Object : _core.Reflector,
        typeof _shared.SharedService === "undefined" ? Object : _shared.SharedService
    ])
], WsAuthGuard);

//# sourceMappingURL=ws-auth.guard.js.map