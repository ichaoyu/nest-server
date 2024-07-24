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
    UserExportSerialize: function() {
        return UserExportSerialize;
    },
    UserTemplateSerialize: function() {
        return UserTemplateSerialize;
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
let UserTemplateSerialize = class UserTemplateSerialize {
};
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '用户账号'
    }),
    _ts_metadata("design:type", String)
], UserTemplateSerialize.prototype, "userName", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '用户昵称'
    }),
    _ts_metadata("design:type", String)
], UserTemplateSerialize.prototype, "nickName", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '邮箱'
    }),
    _ts_metadata("design:type", String)
], UserTemplateSerialize.prototype, "email", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '手机'
    }),
    _ts_metadata("design:type", String)
], UserTemplateSerialize.prototype, "phone", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '性别'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_SEX === "undefined" ? Object : _constants.ENTITY_SEX)
], UserTemplateSerialize.prototype, "sex", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '密码'
    }),
    _ts_metadata("design:type", String)
], UserTemplateSerialize.prototype, "password", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '备注'
    }),
    _ts_metadata("design:type", String)
], UserTemplateSerialize.prototype, "remark", void 0);
let UserExportSerialize = class UserExportSerialize {
    constructor(partial){
        Object.assign(this, partial);
    }
};
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '主键'
    }),
    _ts_metadata("design:type", String)
], UserExportSerialize.prototype, "id", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '用户账号'
    }),
    _ts_metadata("design:type", String)
], UserExportSerialize.prototype, "userName", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '用户昵称'
    }),
    _ts_metadata("design:type", String)
], UserExportSerialize.prototype, "nickName", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '邮箱'
    }),
    _ts_metadata("design:type", String)
], UserExportSerialize.prototype, "email", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '手机'
    }),
    _ts_metadata("design:type", String)
], UserExportSerialize.prototype, "phone", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '性别'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_SEX === "undefined" ? Object : _constants.ENTITY_SEX)
], UserExportSerialize.prototype, "sex", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '状态'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], UserExportSerialize.prototype, "status", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '最后登录IP'
    }),
    _ts_metadata("design:type", String)
], UserExportSerialize.prototype, "loginIp", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '最后登录时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], UserExportSerialize.prototype, "loginDate", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '创建者'
    }),
    _ts_metadata("design:type", String)
], UserExportSerialize.prototype, "createBy", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], UserExportSerialize.prototype, "createTime", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '更新者'
    }),
    _ts_metadata("design:type", String)
], UserExportSerialize.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], UserExportSerialize.prototype, "updateTime", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '备注'
    }),
    _ts_metadata("design:type", String)
], UserExportSerialize.prototype, "remark", void 0);

//# sourceMappingURL=user.serialize.js.map