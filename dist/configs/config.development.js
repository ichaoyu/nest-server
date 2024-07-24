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
        db: 0
    };
    return {
        app: {
            port: 7001,
            apiPath: '/api',
            docPath: '/swagger-ui'
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
            username: 'root',
            password: '1qazxsw2',
            database: 'nest-service',
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
            redis: {
                keyPrefix: `{${_constants.EXTRAS.APP_NAME}}:{bull}`,
                ...sharedRedisOptions
            }
        }
    };
});

//# sourceMappingURL=config.development.js.map