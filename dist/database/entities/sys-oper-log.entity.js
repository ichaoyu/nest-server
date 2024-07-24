"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysOperLogEntity", {
    enumerable: true,
    get: function() {
        return SysOperLogEntity;
    }
});
const _typeorm = require("typeorm");
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
let SysOperLogEntity = class SysOperLogEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'title'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "title", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'biz_type',
        type: 'enum',
        enum: _constants.ENTITY_BIZ_TYPE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_BIZ_TYPE === "undefined" ? Object : _constants.ENTITY_BIZ_TYPE)
], SysOperLogEntity.prototype, "bizType", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'method'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "method", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'request_method'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "requestMethod", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'request_url'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "requestUrl", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'request_params'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "requestParams", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'request_result'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "requestResult", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'oper_name'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "operName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'dept_name'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "deptName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'oper_ip'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "operIp", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'oper_location'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "operLocation", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'status',
        type: 'enum',
        enum: _constants.ENTITY_BIZ_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_BIZ_STATUS === "undefined" ? Object : _constants.ENTITY_BIZ_STATUS)
], SysOperLogEntity.prototype, "status", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'error_msg'
    }),
    _ts_metadata("design:type", String)
], SysOperLogEntity.prototype, "errorMsg", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'oper_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysOperLogEntity.prototype, "operTime", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'cost_time'
    }),
    _ts_metadata("design:type", Number)
], SysOperLogEntity.prototype, "costTime", void 0);
SysOperLogEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'sys_oper_log'
    })
], SysOperLogEntity);

//# sourceMappingURL=sys-oper-log.entity.js.map