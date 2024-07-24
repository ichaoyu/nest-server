"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("./cache-manager.interface"), exports);
_export_star(require("./cache-model.interface"), exports);
_export_star(require("./config.default"), exports);
_export_star(require("./context.interface"), exports);
_export_star(require("./online-info.interface"), exports);
_export_star(require("./payload.interface"), exports);
_export_star(require("./platform.interface"), exports);
_export_star(require("./tree-node.interface"), exports);
_export_star(require("./user-menu.interface"), exports);
_export_star(require("./upload.interface"), exports);
_export_star(require("./excel.interface"), exports);
_export_star(require("./captcha.interface"), exports);
_export_star(require("./redis.interface"), exports);
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