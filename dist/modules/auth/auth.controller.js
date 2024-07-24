"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _decorators = require("../../decorators");
const _authdto = require("./auth.dto");
const _authservice = require("./auth.service");
const _authvo = require("./auth.vo");
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
let AuthController = class AuthController {
    async getCaptcha() {
        return await this.authService.handleGetCaptcha();
    }
    async login(dto) {
        return await this.authService.handleLogin(dto);
    }
    async logout() {
        await this.authService.handleLogout();
    }
    constructor(authService){
        this.authService = authService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取验证码'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _authvo.GetCaptchaVO
    }),
    (0, _decorators.Public)(),
    (0, _common.Get)('/captcha'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "getCaptcha", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '登录'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _authvo.LoginVO
    }),
    (0, _decorators.Public)(),
    (0, _common.Post)('/login'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authdto.LoginDTO === "undefined" ? Object : _authdto.LoginDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
_ts_decorate([
    (0, _swagger.ApiBearerAuth)(),
    (0, _swagger.ApiOperation)({
        summary: '退出'
    }),
    (0, _common.Post)('/logout'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = _ts_decorate([
    (0, _swagger.ApiTags)('鉴权接口'),
    (0, _common.Controller)('/auth'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService
    ])
], AuthController);

//# sourceMappingURL=auth.controller.js.map