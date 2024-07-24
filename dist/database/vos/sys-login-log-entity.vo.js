"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysLoginLogEntityVO", {
    enumerable: true,
    get: function() {
        return SysLoginLogEntityVO;
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
let SysLoginLogEntityVO = class SysLoginLogEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户账号'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntityVO.prototype, "userName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '浏览器'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntityVO.prototype, "browser", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '操作系统'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntityVO.prototype, "os", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '登录状态（0成功 1失败）',
        enum: _constants.ENTITY_LOGIN_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_LOGIN_STATUS === "undefined" ? Object : _constants.ENTITY_LOGIN_STATUS)
], SysLoginLogEntityVO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '提示消息'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntityVO.prototype, "msg", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '登录 IP'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntityVO.prototype, "loginIp", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '登录地点'
    }),
    _ts_metadata("design:type", String)
], SysLoginLogEntityVO.prototype, "loginLocation", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '登录时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysLoginLogEntityVO.prototype, "loginDate", void 0);

//# sourceMappingURL=sys-login-log-entity.vo.js.map