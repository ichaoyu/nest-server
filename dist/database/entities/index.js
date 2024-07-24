"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("./sys-config.entity"), exports);
_export_star(require("./sys-dept.entity"), exports);
_export_star(require("./sys-dict-data.entity"), exports);
_export_star(require("./sys-dict-type.entity"), exports);
_export_star(require("./sys-login-log.entity"), exports);
_export_star(require("./sys-menu.entity"), exports);
_export_star(require("./sys-oper-log.entity"), exports);
_export_star(require("./sys-post.entity"), exports);
_export_star(require("./sys-role.entity"), exports);
_export_star(require("./sys-user.entity"), exports);
_export_star(require("./web-siteinfo.entity"), exports);
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