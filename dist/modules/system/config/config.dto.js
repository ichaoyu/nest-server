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
    CreateConfigDTO: function() {
        return CreateConfigDTO;
    },
    FindConfigPageDTO: function() {
        return FindConfigPageDTO;
    },
    UpdateConfigDTO: function() {
        return UpdateConfigDTO;
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
let FindConfigPageDTO = class FindConfigPageDTO extends _models.PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '参数名称'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindConfigPageDTO.prototype, "configName", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '参数键名'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindConfigPageDTO.prototype, "configKey", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '系统内置',
        enum: _constants.ENTITY_CONFIG_TYPE
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_CONFIG_TYPE, {
        message: '系统内置非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_CONFIG_TYPE === "undefined" ? Object : _constants.ENTITY_CONFIG_TYPE)
], FindConfigPageDTO.prototype, "configType", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '开始时间'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)({}, {
        message: '开始时间格式不正确'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], FindConfigPageDTO.prototype, "beginDate", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '结束时间'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)({}, {
        message: '结束时间格式不正确'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], FindConfigPageDTO.prototype, "endDate", void 0);
let CreateConfigDTO = class CreateConfigDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '参数名称'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '参数名称不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateConfigDTO.prototype, "configName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '参数键名'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '参数键名不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateConfigDTO.prototype, "configKey", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '参数键值'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '参数键值不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateConfigDTO.prototype, "configValue", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '系统内置',
        enum: _constants.ENTITY_CONFIG_TYPE
    }),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_CONFIG_TYPE, {
        message: '系统内置非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_CONFIG_TYPE === "undefined" ? Object : _constants.ENTITY_CONFIG_TYPE)
], CreateConfigDTO.prototype, "configType", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '备注'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateConfigDTO.prototype, "remark", void 0);
let UpdateConfigDTO = class UpdateConfigDTO extends CreateConfigDTO {
};

//# sourceMappingURL=config.dto.js.map