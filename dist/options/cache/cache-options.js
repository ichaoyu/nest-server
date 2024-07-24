"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CACHE_OPTIONS", {
    enumerable: true,
    get: function() {
        return CACHE_OPTIONS;
    }
});
const _config = require("@nestjs/config");
const CACHE_OPTIONS = {
    isGlobal: true,
    useFactory (configService) {
        return configService.get('cache');
    },
    inject: [
        _config.ConfigService
    ]
};

//# sourceMappingURL=cache-options.js.map