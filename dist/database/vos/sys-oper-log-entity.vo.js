"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysOperLogEntityVO", {
    enumerable: true,
    get: function() {
        return SysOperLogEntityVO;
    }
});
const _swagger = require("@nestjs/swagger");
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
let SysOperLogEntityVO = class SysOperLogEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '操作模块'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "title", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '业务类型',
        enum: _constants.ENTITY_BIZ_TYPE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_BIZ_TYPE === "undefined" ? Object : _constants.ENTITY_BIZ_TYPE)
], SysOperLogEntityVO.prototype, "bizType", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '请求方式'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "method", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '请求方式'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "requestMethod", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '请求地址'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "requestUrl", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '请求参数'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "requestParams", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '请求结果'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "requestResult", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '操作人员'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "operName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '部门名称'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "deptName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '操作地址'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "operIp", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '操作地点'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "operLocation", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '状态（0正常 1异常）',
        enum: _constants.ENTITY_BIZ_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_BIZ_STATUS === "undefined" ? Object : _constants.ENTITY_BIZ_STATUS)
], SysOperLogEntityVO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '错误消息'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntityVO.prototype, "errorMsg", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '操作时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysOperLogEntityVO.prototype, "operTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '消耗时间'
    }),
    _ts_metadata("design:type", Number)
], SysOperLogEntityVO.prototype, "costTime", void 0);

//# sourceMappingURL=sys-oper-log-entity.vo.js.map