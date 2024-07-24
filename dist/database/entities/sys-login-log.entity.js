"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysLoginLogEntity", {
    enumerable: true,
    get: function() {
        return SysLoginLogEntity;
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
let SysLoginLogEntity = class SysLoginLogEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'user_name'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntity.prototype, "userName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'browser'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntity.prototype, "browser", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'os'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntity.prototype, "os", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'status',
        type: 'enum',
        enum: _constants.ENTITY_LOGIN_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_LOGIN_STATUS === "undefined" ? Object : _constants.ENTITY_LOGIN_STATUS)
], SysLoginLogEntity.prototype, "status", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'msg'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntity.prototype, "msg", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'login_ip'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntity.prototype, "loginIp", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'login_location'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntity.prototype, "loginLocation", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'login_date'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysLoginLogEntity.prototype, "loginDate", void 0);
SysLoginLogEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'sys_login_log'
    })
], SysLoginLogEntity);

//# sourceMappingURL=sys-login-log.entity.js.map