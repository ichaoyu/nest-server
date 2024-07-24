"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginLogExportSerialize", {
    enumerable: true,
    get: function() {
        return LoginLogExportSerialize;
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
let LoginLogExportSerialize = class LoginLogExportSerialize {
    constructor(partial){
        Object.assign(this, partial);
    }
};
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '主键'
    }),
    _ts_metadata("design:type", String)
], LoginLogExportSerialize.prototype, "id", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '用户账号'
    }),
    _ts_metadata("design:type", String)
], LoginLogExportSerialize.prototype, "userName", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '浏览器'
    }),
    _ts_metadata("design:type", String)
], LoginLogExportSerialize.prototype, "browser", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '操作系统'
    }),
    _ts_metadata("design:type", String)
], LoginLogExportSerialize.prototype, "os", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '登录状态'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_LOGIN_STATUS === "undefined" ? Object : _constants.ENTITY_LOGIN_STATUS)
], LoginLogExportSerialize.prototype, "status", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '提示消息'
    }),
    _ts_metadata("design:type", String)
], LoginLogExportSerialize.prototype, "msg", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '登录 IP'
    }),
    _ts_metadata("design:type", String)
], LoginLogExportSerialize.prototype, "loginIp", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '登录地点'
    }),
    _ts_metadata("design:type", String)
], LoginLogExportSerialize.prototype, "loginLocation", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '登录时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], LoginLogExportSerialize.prototype, "loginDate", void 0);

//# sourceMappingURL=login-log.serialize.js.map