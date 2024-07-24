"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CaptchaModule", {
    enumerable: true,
    get: function() {
        return CaptchaModule;
    }
});
const _common = require("@nestjs/common");
const _constants = require("../../constants");
const _captchaproviders = require("./captcha.providers");
const _captchaservice = require("./captcha.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CaptchaModule = class CaptchaModule {
    static registerAsync(params) {
        const { global, optionsProvider } = params;
        let CaptchaCoreModule = class CaptchaCoreModule {
            static create() {
                return {
                    global,
                    module: CaptchaCoreModule,
                    providers: [
                        (0, _captchaproviders.createCaptchaOptions)(optionsProvider),
                        (0, _captchaproviders.createCaptchaMergedOptions)(),
                        {
                            provide: _constants.CAPTCHA_SERVICE,
                            useClass: _captchaservice.CaptchaService
                        }
                    ],
                    exports: [
                        _constants.CAPTCHA_SERVICE
                    ]
                };
            }
        };
        CaptchaCoreModule = _ts_decorate([
            (0, _common.Module)({})
        ], CaptchaCoreModule);
        return CaptchaCoreModule.create();
    }
};

//# sourceMappingURL=captcha.module.js.map