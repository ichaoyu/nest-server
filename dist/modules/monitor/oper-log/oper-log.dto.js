"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FindOperLogPageDTO", {
    enumerable: true,
    get: function() {
        return FindOperLogPageDTO;
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
let FindOperLogPageDTO = class FindOperLogPageDTO extends _models.PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '操作地址'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindOperLogPageDTO.prototype, "operIp", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '操作模块'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindOperLogPageDTO.prototype, "title", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '操作人员'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindOperLogPageDTO.prototype, "operName", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '业务类型',
        enum: _constants.ENTITY_BIZ_TYPE
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_BIZ_TYPE, {
        message: '业务类型非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_BIZ_TYPE === "undefined" ? Object : _constants.ENTITY_BIZ_TYPE)
], FindOperLogPageDTO.prototype, "bizType", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '状态',
        enum: _constants.ENTITY_BIZ_STATUS
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_BIZ_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_BIZ_STATUS === "undefined" ? Object : _constants.ENTITY_BIZ_STATUS)
], FindOperLogPageDTO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '开始时间'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)({}, {
        message: '开始时间格式不正确'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], FindOperLogPageDTO.prototype, "beginDate", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '结束时间'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)({}, {
        message: '结束时间格式不正确'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], FindOperLogPageDTO.prototype, "endDate", void 0);

//# sourceMappingURL=oper-log.dto.js.map