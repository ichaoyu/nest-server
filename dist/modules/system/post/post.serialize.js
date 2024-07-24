"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostExportSerialize", {
    enumerable: true,
    get: function() {
        return PostExportSerialize;
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
let PostExportSerialize = class PostExportSerialize {
    constructor(partial){
        Object.assign(this, partial);
    }
};
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '主键'
    }),
    _ts_metadata("design:type", String)
], PostExportSerialize.prototype, "id", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '岗位编码'
    }),
    _ts_metadata("design:type", String)
], PostExportSerialize.prototype, "postCode", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '岗位名称'
    }),
    _ts_metadata("design:type", String)
], PostExportSerialize.prototype, "postName", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '显示顺序'
    }),
    _ts_metadata("design:type", Number)
], PostExportSerialize.prototype, "postSort", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '状态'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], PostExportSerialize.prototype, "status", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '创建者'
    }),
    _ts_metadata("design:type", String)
], PostExportSerialize.prototype, "createBy", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], PostExportSerialize.prototype, "createTime", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '更新者'
    }),
    _ts_metadata("design:type", String)
], PostExportSerialize.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], PostExportSerialize.prototype, "updateTime", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '备注'
    }),
    _ts_metadata("design:type", String)
], PostExportSerialize.prototype, "remark", void 0);

//# sourceMappingURL=post.serialize.js.map