"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TYPEORM_OPTIONS", {
    enumerable: true,
    get: function() {
        return TYPEORM_OPTIONS;
    }
});
const _config = require("@nestjs/config");
const TYPEORM_OPTIONS = {
    useFactory (configService) {
        return configService.get('typeorm');
    },
    inject: [
        _config.ConfigService
    ]
};

//# sourceMappingURL=typeorm-options.js.map