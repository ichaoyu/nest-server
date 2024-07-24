"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("./sys-config-entity.vo"), exports);
_export_star(require("./sys-dept-entity.vo"), exports);
_export_star(require("./sys-dict-data-entity.vo"), exports);
_export_star(require("./sys-dict-type-entity.vo"), exports);
_export_star(require("./sys-login-log-entity.vo"), exports);
_export_star(require("./sys-menu-entity.vo"), exports);
_export_star(require("./sys-oper-log-entity.vo"), exports);
_export_star(require("./sys-post-entity.vo"), exports);
_export_star(require("./sys-role-entity.vo"), exports);
_export_star(require("./sys-user-entity.vo"), exports);
_export_star(require("./web-siteinfo-entity.vo"), exports);
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