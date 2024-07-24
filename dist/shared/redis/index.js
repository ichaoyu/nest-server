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
    RedisClient: function() {
        return _interfaces.RedisClient;
    },
    RedisClientOptions: function() {
        return _interfaces.RedisClientOptions;
    },
    RedisCluster: function() {
        return _interfaces.RedisCluster;
    },
    RedisClusterOptions: function() {
        return _interfaces.RedisClusterOptions;
    }
});
const _interfaces = require("../../interfaces");
_export_star(require("./redis.module"), exports);
_export_star(require("./redis.providers"), exports);
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