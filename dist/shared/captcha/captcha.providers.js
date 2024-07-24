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
    createCaptchaMergedOptions: function() {
        return createCaptchaMergedOptions;
    },
    createCaptchaOptions: function() {
        return createCaptchaOptions;
    }
});
const _constants = require("../../constants");
function createCaptchaMergedOptions() {
    return {
        provide: _constants.CAPTCHA_MERGED_OPTIONS,
        useFactory: (options)=>{
            return Object.assign({}, _constants.defaultOptions, options || {});
        },
        inject: [
            _constants.CAPTCHA_OPTIONS
        ]
    };
}
function createCaptchaOptions(provider) {
    return {
        provide: _constants.CAPTCHA_OPTIONS,
        ...provider
    };
}

//# sourceMappingURL=captcha.providers.js.map