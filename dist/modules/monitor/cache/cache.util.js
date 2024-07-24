"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createCacheModel", {
    enumerable: true,
    get: function() {
        return createCacheModel;
    }
});
const createCacheModel = (data)=>({
        cacheName: data.cacheName.replace(':', ''),
        remark: data.remark
    });

//# sourceMappingURL=cache.util.js.map