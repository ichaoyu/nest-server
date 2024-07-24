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
    EXCEL_SERVICE: function() {
        return _constants.EXCEL_SERVICE;
    },
    ExcelModuleOptions: function() {
        return _interfaces.ExcelModuleOptions;
    }
});
const _constants = require("../../constants");
_export_star(require("../../decorators/excel.decorator"), exports);
const _interfaces = require("../../interfaces");
_export_star(require("./excel.module"), exports);
_export_star(require("./excel.service"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=index.js.map