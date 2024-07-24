"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginDTO", {
    enumerable: true,
    get: function() {
        return LoginDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let LoginDTO = class LoginDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '账号',
        example: 'admin'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '账号不能为空'
    }),
    _ts_metadata("design:type", String)
], LoginDTO.prototype, "userName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '密码',
        example: '123456'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '密码不能为空'
    }),
    (0, _classvalidator.MinLength)(6, {
        message: '密码最少6位'
    }),
    _ts_metadata("design:type", String)
], LoginDTO.prototype, "password", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '验证码编号',
        example: ''
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '验证码编号不能为空'
    }),
    _ts_metadata("design:type", String)
], LoginDTO.prototype, "captchaId", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '验证码值',
        example: ''
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '验证码值不能为空'
    }),
    _ts_metadata("design:type", String)
], LoginDTO.prototype, "captchaValue", void 0);

//# sourceMappingURL=auth.dto.js.map