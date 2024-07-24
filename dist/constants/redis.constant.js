/**
 * Redis 客户端
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
    REDIS_CLIENT: function() {
        return REDIS_CLIENT;
    },
    REDIS_CLIENT_OPTIONS: function() {
        return REDIS_CLIENT_OPTIONS;
    }
});
const REDIS_CLIENT = Symbol('REDIS_CLIENT');
const REDIS_CLIENT_OPTIONS = Symbol('REDIS_CLIENT_OPTIONS');

//# sourceMappingURL=redis.constant.js.map