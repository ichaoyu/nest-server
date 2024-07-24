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
    CreateDeptDTO: function() {
        return CreateDeptDTO;
    },
    FindDeptListDTO: function() {
        return FindDeptListDTO;
    },
    UpdateDeptDTO: function() {
        return UpdateDeptDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
const _constants = require("../../../constants");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let FindDeptListDTO = class FindDeptListDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '部门名称'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindDeptListDTO.prototype, "deptName", void 0);
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
], FindDeptListDTO.prototype, "status", void 0);
let CreateDeptDTO = class CreateDeptDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '上级部门'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '上级部门不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateDeptDTO.prototype, "parentId", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '部门名称'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '部门名称不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateDeptDTO.prototype, "deptName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '显示顺序'
    }),
    (0, _classvalidator.IsPositive)({
        message: '显示顺序为正整数'
    }),
    _ts_metadata("design:type", Number)
], CreateDeptDTO.prototype, "orderNum", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '负责人'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateDeptDTO.prototype, "leader", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '手机'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateDeptDTO.prototype, "phone", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '邮箱'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEmail)({}, {
        message: '邮箱格式不正确'
    }),
    _ts_metadata("design:type", String)
], CreateDeptDTO.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '状态',
        enum: _constants.ENTITY_STATUS
    }),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], CreateDeptDTO.prototype, "status", void 0);
let UpdateDeptDTO = class UpdateDeptDTO extends CreateDeptDTO {
};

//# sourceMappingURL=dept.dto.js.map