"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _config = require("@nestjs/config");
const _cachemanagerioredisyet = require("cache-manager-ioredis-yet");
const _constants = require("../constants");
const _default = (0, _config.registerAs)('', ()=>{
    const sharedRedisOptions = {
        host: '127.0.0.1',
        port: 6379,
        password: '1qazxsw2_CY',
        db: 0
    };
    return {
        app: {
            port: 7001,
            apiPath: '/api'
        },
        jwt: {
            secret: '$2b$10$R9wXm8rssRiPSVuodOjnFu',
            signOptions: {
                expiresIn: 604800000
            }
        },
        typeorm: {
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'chaoyu',
            password: '1qazxsw_CY',
            database: 'ruoyi',
            autoLoadEntities: true
        },
        cache: {
            store: _cachemanagerioredisyet.redisStore,
            keyPrefix: `{${_constants.EXTRAS.APP_NAME}}:{cache}:`,
            ...sharedRedisOptions
        },
        redis: {
            keyPrefix: `{${_constants.EXTRAS.APP_NAME}}:{redis}:`,
            ...sharedRedisOptions
        },
        bull: {
            prefix: `{${_constants.EXTRAS.APP_NAME}}:{bull}`,
            redis: {
                ...sharedRedisOptions
            }
        }
    };
});

//# sourceMappingURL=config.production.js.map