/**
 * 表格服务
 */ "use strict";
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
    EXCEL_COLUMN_GROUP: function() {
        return EXCEL_COLUMN_GROUP;
    },
    EXCEL_COLUMN_METADATA: function() {
        return EXCEL_COLUMN_METADATA;
    },
    EXCEL_SERVICE: function() {
        return EXCEL_SERVICE;
    }
});
const EXCEL_SERVICE = Symbol('EXCEL_SERVICE');
const EXCEL_COLUMN_METADATA = 'excel_module:excel_column';
const EXCEL_COLUMN_GROUP = 'excel_column';

//# sourceMappingURL=excel.constant.js.map