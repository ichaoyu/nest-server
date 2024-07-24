"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OperLogExportSerialize", {
    enumerable: true,
    get: function() {
        return OperLogExportSerialize;
    }
});
const _excel = require("../../../shared/excel");
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
let OperLogExportSerialize = class OperLogExportSerialize {
    constructor(partial){
        Object.assign(this, partial);
    }
};
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '主键'
    }),
    _ts_metadata("design:type", String)
], OperLogExportSerialize.prototype, "id", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '系统模块'
    }),
    _ts_metadata("design:type", String)
], OperLogExportSerialize.prototype, "title", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '操作类型'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_BIZ_TYPE === "undefined" ? Object : _constants.ENTITY_BIZ_TYPE)
], OperLogExportSerialize.prototype, "bizType", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '操作人员'
    }),
    _ts_metadata("design:type", String)
], OperLogExportSerialize.prototype, "operName", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '操作地址'
    }),
    _ts_metadata("design:type", String)
], OperLogExportSerialize.prototype, "operIp", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '操作地点'
    }),
    _ts_metadata("design:type", String)
], OperLogExportSerialize.prototype, "operLocation", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '状态'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_BIZ_STATUS === "undefined" ? Object : _constants.ENTITY_BIZ_STATUS)
], OperLogExportSerialize.prototype, "status", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '操作日期'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], OperLogExportSerialize.prototype, "operTime", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '消耗时间'
    }),
    _ts_metadata("design:type", Number)
], OperLogExportSerialize.prototype, "costTime", void 0);

//# sourceMappingURL=oper-log.serialize.js.map