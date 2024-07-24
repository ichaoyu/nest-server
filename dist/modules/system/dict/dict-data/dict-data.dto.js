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
    CreateDictDataDTO: function() {
        return CreateDictDataDTO;
    },
    FindDictDataPageDTO: function() {
        return FindDictDataPageDTO;
    },
    UpdateDictDataDTO: function() {
        return UpdateDictDataDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
const _constants = require("../../../../constants");
const _models = require("../../../../models");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let FindDictDataPageDTO = class FindDictDataPageDTO extends _models.PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典类型标识'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '字典类型标识不能为空'
    }),
    _ts_metadata("design:type", String)
], FindDictDataPageDTO.prototype, "dictType", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '字典数据标签'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindDictDataPageDTO.prototype, "dictLabel", void 0);
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
], FindDictDataPageDTO.prototype, "status", void 0);
let CreateDictDataDTO = class CreateDictDataDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典类型标识'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '字典类型标识不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateDictDataDTO.prototype, "dictType", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典数据标签'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '字典数据标签不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateDictDataDTO.prototype, "dictLabel", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典数据键值'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '字典数据键值不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateDictDataDTO.prototype, "dictValue", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典数据显示顺序'
    }),
    (0, _classvalidator.IsPositive)({
        message: '字典数据显示顺序为正整数'
    }),
    _ts_metadata("design:type", Number)
], CreateDictDataDTO.prototype, "dictSort", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '状态',
        enum: _constants.ENTITY_STATUS
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '状态不能为空'
    }),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], CreateDictDataDTO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '备注'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateDictDataDTO.prototype, "remark", void 0);
let UpdateDictDataDTO = class UpdateDictDataDTO extends CreateDictDataDTO {
};

//# sourceMappingURL=dict-data.dto.js.map