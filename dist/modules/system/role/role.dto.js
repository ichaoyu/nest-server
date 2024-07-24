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
    AllocateDTO: function() {
        return AllocateDTO;
    },
    CreateRoleDTO: function() {
        return CreateRoleDTO;
    },
    FindAllocatedPageDTO: function() {
        return FindAllocatedPageDTO;
    },
    FindRolePageDTO: function() {
        return FindRolePageDTO;
    },
    FindUnallocatedPageDTO: function() {
        return FindUnallocatedPageDTO;
    },
    UpdateRoleDTO: function() {
        return UpdateRoleDTO;
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
let FindRolePageDTO = class FindRolePageDTO extends _models.PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '角色名称'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindRolePageDTO.prototype, "roleName", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '权限字符'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindRolePageDTO.prototype, "roleKey", void 0);
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
], FindRolePageDTO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '开始时间'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)({}, {
        message: '开始时间格式不正确'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], FindRolePageDTO.prototype, "beginDate", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '结束时间'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)({}, {
        message: '结束时间格式不正确'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], FindRolePageDTO.prototype, "endDate", void 0);
let FindAllocatedPageDTO = class FindAllocatedPageDTO extends _models.PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '账户'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindAllocatedPageDTO.prototype, "userName", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '手机'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsPhoneNumber)('CN', {
        message: '手机格式不正确'
    }),
    _ts_metadata("design:type", String)
], FindAllocatedPageDTO.prototype, "phone", void 0);
let CreateRoleDTO = class CreateRoleDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '角色名称'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '角色名称不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateRoleDTO.prototype, "roleName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '权限字符'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '权限字符不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateRoleDTO.prototype, "roleKey", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '显示顺序'
    }),
    (0, _classvalidator.IsPositive)({
        message: '显示顺序为正整数'
    }),
    _ts_metadata("design:type", Number)
], CreateRoleDTO.prototype, "roleSort", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '菜单主键列表',
        type: 'array',
        items: {
            type: 'string'
        },
        default: []
    }),
    (0, _classvalidator.IsArray)(),
    _ts_metadata("design:type", Array)
], CreateRoleDTO.prototype, "menus", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '状态',
        enum: _constants.ENTITY_STATUS,
        default: ''
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '状态不能为空'
    }),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], CreateRoleDTO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '备注',
        default: ''
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '备注不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateRoleDTO.prototype, "remark", void 0);
let UpdateRoleDTO = class UpdateRoleDTO extends CreateRoleDTO {
};
let FindUnallocatedPageDTO = class FindUnallocatedPageDTO extends _models.PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '账号'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindUnallocatedPageDTO.prototype, "userName", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '手机'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsPhoneNumber)('CN', {
        message: '手机格式不正确'
    }),
    _ts_metadata("design:type", String)
], FindUnallocatedPageDTO.prototype, "phone", void 0);
let AllocateDTO = class AllocateDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户主键数组',
        type: 'array',
        items: {
            type: 'string'
        }
    }),
    (0, _classvalidator.IsArray)(),
    (0, _classvalidator.MinLength)(1, {
        message: '用户主键数组不能为空'
    }),
    _ts_metadata("design:type", Array)
], AllocateDTO.prototype, "ids", void 0);

//# sourceMappingURL=role.dto.js.map