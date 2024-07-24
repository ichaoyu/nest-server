"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ConfigExportSerialize", {
    enumerable: true,
    get: function() {
        return ConfigExportSerialize;
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
let ConfigExportSerialize = class ConfigExportSerialize {
    constructor(partial){
        Object.assign(this, partial);
    }
};
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '主键'
    }),
    _ts_metadata("design:type", String)
], ConfigExportSerialize.prototype, "id", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '参数名称'
    }),
    _ts_metadata("design:type", String)
], ConfigExportSerialize.prototype, "configName", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '参数键名'
    }),
    _ts_metadata("design:type", String)
], ConfigExportSerialize.prototype, "configKey", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '参数键值'
    }),
    _ts_metadata("design:type", String)
], ConfigExportSerialize.prototype, "configValue", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '系统内置'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_CONFIG_TYPE === "undefined" ? Object : _constants.ENTITY_CONFIG_TYPE)
], ConfigExportSerialize.prototype, "configType", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], ConfigExportSerialize.prototype, "createTime", void 0);
_ts_decorate([
    (0, _excel.ExcelColumn)({
        header: '备注'
    }),
    _ts_metadata("design:type", String)
], ConfigExportSerialize.prototype, "remark", void 0);

//# sourceMappingURL=config.serialize.js.map