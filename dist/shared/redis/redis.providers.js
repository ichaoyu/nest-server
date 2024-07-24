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
    createFactory: function() {
        return createFactory;
    },
    createRedisClient: function() {
        return createRedisClient;
    },
    createRedisCluster: function() {
        return createRedisCluster;
    },
    createRedisCommonOptions: function() {
        return createRedisCommonOptions;
    }
});
const _interfaces = require("../../interfaces");
function createRedisClient(clientToken, optionsToken) {
    return {
        provide: clientToken,
        useFactory: (options)=>{
            return new _interfaces.RedisClient(options);
        },
        inject: [
            optionsToken
        ]
    };
}
function createRedisCluster(clusterToken, optionsToken) {
    return {
        provide: clusterToken,
        useFactory: (options)=>{
            return new _interfaces.RedisCluster(options.nodes, options.options);
        },
        inject: [
            optionsToken
        ]
    };
}
function createRedisCommonOptions(optionsToken, provider) {
    return {
        provide: optionsToken,
        ...provider
    };
}
function createFactory(type) {
    const factory = {
        client: createRedisClient,
        cluster: createRedisCluster
    };
    return factory[type];
}

//# sourceMappingURL=redis.providers.js.map