"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // 当环境变量匹配不上时采用本地开发配置
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _configdevelopment = /*#__PURE__*/ _interop_require_default(require("./config.development"));
const _configproduction = /*#__PURE__*/ _interop_require_default(require("./config.production"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { NODE_ENV } = process.env;
const CONFIG_MAP = {
    development: _configdevelopment.default,
    production: _configproduction.default
};
const _default = CONFIG_MAP[NODE_ENV] || CONFIG_MAP.development;

//# sourceMappingURL=index.js.map