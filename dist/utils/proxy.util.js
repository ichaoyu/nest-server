"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProxyUtil", {
    enumerable: true,
    get: function() {
        return ProxyUtil;
    }
});
const _caseanything = /*#__PURE__*/ _interop_require_wildcard(require("case-anything"));
const _nanoid = require("nanoid");
const _propertiesfile = require("properties-file");
const _systeminformation = /*#__PURE__*/ _interop_require_default(require("systeminformation"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const ProxyUtil = {
    /**
   * 字符串命名转换
   */ case: _caseanything,
    /**
   * 系统信息
   */ si: _systeminformation.default,
    /**
   * ID 生成器
   */ generateID: _nanoid.nanoid,
    /**
   * `.properties` 解析
   */ getProperties: _propertiesfile.getProperties
};

//# sourceMappingURL=proxy.util.js.map