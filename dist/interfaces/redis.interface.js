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
        return _ioredis.Redis;
    },
    RedisClientOptions: function() {
        return _ioredis.RedisOptions;
    },
    RedisCluster: function() {
        return _ioredis.Cluster;
    }
});
const _ioredis = require("ioredis");

//# sourceMappingURL=redis.interface.js.map