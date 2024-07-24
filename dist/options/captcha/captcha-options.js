"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CAPTCHA_OPTIONS", {
    enumerable: true,
    get: function() {
        return CAPTCHA_OPTIONS;
    }
});
const _config = require("@nestjs/config");
const CAPTCHA_OPTIONS = {
    global: true,
    optionsProvider: {
        useFactory (configService) {
            return configService.get('captcha');
        },
        inject: [
            _config.ConfigService
        ]
    }
};

//# sourceMappingURL=captcha-options.js.map