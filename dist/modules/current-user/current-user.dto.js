"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UpdateCurrentUserBaseDTO: function() {
        return UpdateCurrentUserBaseDTO;
    },
    UpdateCurrentUserPasswordDTO: function() {
        return UpdateCurrentUserPasswordDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _validators = require("../../shared/validators");
const _classvalidator = require("class-validator");
const _constants = require("../../constants");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdateCurrentUserBaseDTO = class UpdateCurrentUserBaseDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户昵称'
    }),
    _ts_metadata("design:type", String)
], UpdateCurrentUserBaseDTO.prototype, "nickName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '手机号码'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '手机号码不能为空'
    }),
    (0, _classvalidator.IsPhoneNumber)('CN', {
        message: '手机号码格式不正确'
    }),
    _ts_metadata("design:type", String)
], UpdateCurrentUserBaseDTO.prototype, "phone", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '邮箱地址'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '邮箱地址不能为空'
    }),
    (0, _classvalidator.IsEmail)({}, {
        message: '邮箱地址格式不正确'
    }),
    _ts_metadata("design:type", String)
], UpdateCurrentUserBaseDTO.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '性别',
        enum: _constants.ENTITY_SEX
    }),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_SEX, {
        message: '性别非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_SEX === "undefined" ? Object : _constants.ENTITY_SEX)
], UpdateCurrentUserBaseDTO.prototype, "sex", void 0);
let UpdateCurrentUserPasswordDTO = class UpdateCurrentUserPasswordDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '旧密码'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '旧密码不能为空'
    }),
    _ts_metadata("design:type", String)
], UpdateCurrentUserPasswordDTO.prototype, "oldPassword", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '新密码'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '新密码不能为空'
    }),
    (0, _classvalidator.MinLength)(6, {
        message: '新密码最少6位'
    }),
    _ts_metadata("design:type", String)
], UpdateCurrentUserPasswordDTO.prototype, "newPassword", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '确认密码'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '确认密码不能为空'
    }),
    (0, _validators.IsEqualWith)('newPassword', {
        message: '两次输入的密码不一致'
    }),
    _ts_metadata("design:type", String)
], UpdateCurrentUserPasswordDTO.prototype, "confirmPassword", void 0);

//# sourceMappingURL=current-user.dto.js.map