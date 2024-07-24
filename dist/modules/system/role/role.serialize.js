"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoleExportSerialize", {
    enumerable: true,
    get: function() {
        return RoleExportSerialize;
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
let RoleExportSerialize = class RoleExportSerialize {
    constructor(partial){
        Object.assign(this, partial);
    }
};
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '主键'
    }),
    _ts_metadata("design:type", String)
], RoleExportSerialize.prototype, "id", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '角色名称'
    }),
    _ts_metadata("design:type", String)
], RoleExportSerialize.prototype, "roleName", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '权限字符'
    }),
    _ts_metadata("design:type", String)
], RoleExportSerialize.prototype, "roleKey", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '显示顺序'
    }),
    _ts_metadata("design:type", Number)
], RoleExportSerialize.prototype, "roleSort", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '状态'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], RoleExportSerialize.prototype, "status", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], RoleExportSerialize.prototype, "createTime", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '备注'
    }),
    _ts_metadata("design:type", String)
], RoleExportSerialize.prototype, "remark", void 0);

//# sourceMappingURL=role.serialize.js.map