"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HashUtil", {
    enumerable: true,
    get: function() {
        return HashUtil;
    }
});
const _bcrypt = /*#__PURE__*/ _interop_require_wildcard(require("bcrypt"));
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
const HashUtil = {
    /**
   * 比较密码
   * @param {string} newVal 新密码
   * @param {string} oldVal 旧密码
   */ compare: async (newVal, oldVal)=>{
        return await _bcrypt.compare(newVal, oldVal);
    },
    /**
   * 加密密码
   * @param {string} val 原始密码
   */ crypto: async (val)=>{
        const salt = await _bcrypt.genSalt(10);
        return await _bcrypt.hash(val, salt);
    }
};

//# sourceMappingURL=hash.util.js.map