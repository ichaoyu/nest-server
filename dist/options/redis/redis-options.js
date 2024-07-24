"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "REDIS_OPTIONS", {
    enumerable: true,
    get: function() {
        return REDIS_OPTIONS;
    }
});
const _config = require("@nestjs/config");
const _constants = require("../../constants");
const REDIS_OPTIONS = {
    global: true,
    createType: 'client',
    clientToken: _constants.REDIS_CLIENT,
    optionsToken: _constants.REDIS_CLIENT_OPTIONS,
    optionsProvider: {
        useFactory: (configService)=>{
            return configService.get('redis');
        },
        inject: [
            _config.ConfigService
        ]
    }
};

//# sourceMappingURL=redis-options.js.map