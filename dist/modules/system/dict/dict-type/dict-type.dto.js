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
    CreateDictTypeDTO: function() {
        return CreateDictTypeDTO;
    },
    FindDictTypePageDTO: function() {
        return FindDictTypePageDTO;
    },
    UpdateDictTypeDTO: function() {
        return UpdateDictTypeDTO;
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
let CreateDictTypeDTO = class CreateDictTypeDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典类型名称'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '字典类型名称不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateDictTypeDTO.prototype, "dictName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典类型标识'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '字典类型标识不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateDictTypeDTO.prototype, "dictType", void 0);
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
], CreateDictTypeDTO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '备注'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateDictTypeDTO.prototype, "remark", void 0);
let UpdateDictTypeDTO = class UpdateDictTypeDTO extends CreateDictTypeDTO {
};
let FindDictTypePageDTO = class FindDictTypePageDTO extends _models.PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '字典类型名称'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindDictTypePageDTO.prototype, "dictName", void 0);

//# sourceMappingURL=dict-type.dto.js.map