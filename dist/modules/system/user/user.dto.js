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
    CreateUserDTO: function() {
        return CreateUserDTO;
    },
    FindUserPageDTO: function() {
        return FindUserPageDTO;
    },
    ResetPasswordDTO: function() {
        return ResetPasswordDTO;
    },
    UpdateUserDTO: function() {
        return UpdateUserDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
const _constants = require("../../../constants");
const _models = require("../../../models");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let FindUserPageDTO = class FindUserPageDTO extends _models.PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '部门主键'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindUserPageDTO.prototype, "deptId", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '账号'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindUserPageDTO.prototype, "userName", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '手机'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsPhoneNumber)('CN', {
        message: '手机格式不正确'
    }),
    _ts_metadata("design:type", String)
], FindUserPageDTO.prototype, "phone", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '状态',
        enum: _constants.ENTITY_STATUS
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], FindUserPageDTO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '开始时间'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)({}, {
        message: '开始时间格式不正确'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], FindUserPageDTO.prototype, "beginDate", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '结束时间'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)({}, {
        message: '结束时间格式不正确'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], FindUserPageDTO.prototype, "endDate", void 0);
let CreateUserDTO = class CreateUserDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '昵称'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '昵称不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "nickName", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '部门主键'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "deptId", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '手机'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsPhoneNumber)('CN', {
        message: '手机格式不正确'
    }),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "phone", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '邮箱'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEmail)({}, {
        message: '邮箱格式不正确'
    }),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '账号'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '账号不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "userName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '密码'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '密码不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '性别',
        enum: _constants.ENTITY_SEX
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_SEX, {
        message: '性别非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_SEX === "undefined" ? Object : _constants.ENTITY_SEX)
], CreateUserDTO.prototype, "sex", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '状态',
        enum: _constants.ENTITY_STATUS
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], CreateUserDTO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '岗位主键数组',
        type: 'array',
        items: {
            type: 'string'
        }
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsArray)(),
    _ts_metadata("design:type", Array)
], CreateUserDTO.prototype, "postIds", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '角色主键数组',
        type: 'array',
        items: {
            type: 'string'
        }
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsArray)(),
    _ts_metadata("design:type", Array)
], CreateUserDTO.prototype, "roleIds", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '备注'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "remark", void 0);
let UpdateUserDTO = class UpdateUserDTO extends (0, _swagger.OmitType)(CreateUserDTO, [
    'userName',
    'password'
]) {
};
let ResetPasswordDTO = class ResetPasswordDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '密码'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '密码不能为空'
    }),
    (0, _classvalidator.MinLength)(6, {
        message: '密码最少6位'
    }),
    _ts_metadata("design:type", String)
], ResetPasswordDTO.prototype, "password", void 0);

//# sourceMappingURL=user.dto.js.map