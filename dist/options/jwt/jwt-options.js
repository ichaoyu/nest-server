"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JWT_OPTIONS", {
    enumerable: true,
    get: function() {
        return JWT_OPTIONS;
    }
});
const _config = require("@nestjs/config");
const JWT_OPTIONS = {
    global: true,
    useFactory (configService) {
        return configService.get('jwt');
    },
    inject: [
        _config.ConfigService
    ]
};

//# sourceMappingURL=jwt-options.js.map