"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("./oper-log.decorator"), exports);
_export_star(require("./permission.decorator"), exports);
_export_star(require("./public.decorator"), exports);
_export_star(require("./excel.decorator"), exports);
_export_star(require("./upload.decorator"), exports);
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