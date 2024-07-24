"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CaptchaService", {
    enumerable: true,
    get: function() {
        return CaptchaService;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _cachemanager1 = require("cache-manager");
const _minisvgdatauri = /*#__PURE__*/ _interop_require_default(require("mini-svg-data-uri"));
const _nanoid = require("nanoid");
const _svgcaptcha = /*#__PURE__*/ _interop_require_default(require("svg-captcha"));
const _constants = require("../../constants");
const _interfaces = require("../../interfaces");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let CaptchaService = class CaptchaService {
    async image(options) {
        const { width, height, type, size, noise } = Object.assign({}, this.options, this.options.default, this.options.image, options);
        let ignoreChars = '';
        switch(type){
            case 'letter':
                ignoreChars = _constants.numbers;
                break;
            case 'number':
                ignoreChars = _constants.letters;
                break;
        }
        const { data, text } = _svgcaptcha.default.create({
            ignoreChars,
            width,
            height,
            size,
            noise
        });
        const id = await this.set(text);
        const imageBase64 = (0, _minisvgdatauri.default)(data);
        return {
            id,
            imageBase64
        };
    }
    async formula(options) {
        const { width, height, noise } = Object.assign({}, this.options, this.options.default, this.options.formula, options);
        const { data, text } = _svgcaptcha.default.createMathExpr({
            width,
            height,
            noise
        });
        const id = await this.set(text);
        const imageBase64 = (0, _minisvgdatauri.default)(data);
        return {
            id,
            imageBase64
        };
    }
    async text(options) {
        const textOptions = Object.assign({}, this.options, this.options.default, this.options.text, options);
        let chars = '';
        switch(textOptions.type){
            case 'letter':
                chars = _constants.letters;
                break;
            case 'number':
                chars = _constants.numbers;
                break;
            default:
                chars = _constants.letters + _constants.numbers;
                break;
        }
        let text = '';
        while(textOptions.size--){
            text += chars[Math.floor(Math.random() * chars.length)];
        }
        const id = await this.set(text);
        return {
            id,
            text
        };
    }
    async set(text) {
        const id = (0, _nanoid.nanoid)();
        await this.cacheManager.set(this.getStoreId(id), (text || '').toLowerCase(), this.options.expirationTime);
        return id;
    }
    async check(id, value) {
        if (!id || !value) {
            return false;
        }
        const storeId = this.getStoreId(id);
        const storedValue = await this.cacheManager.get(storeId);
        if (value.toLowerCase() !== storedValue) {
            return false;
        }
        this.cacheManager.del(storeId);
        return true;
    }
    getStoreId(id) {
        if (!this.options.idPrefix) {
            return id;
        }
        return `${this.options.idPrefix}:${id}`;
    }
    constructor(cacheManager, options){
        this.cacheManager = cacheManager;
        this.options = options;
    }
};
CaptchaService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_cachemanager.CACHE_MANAGER)),
    _ts_param(1, (0, _common.Inject)(_constants.CAPTCHA_MERGED_OPTIONS)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _cachemanager1.Cache === "undefined" ? Object : _cachemanager1.Cache,
        typeof _interfaces.CaptchaOptions === "undefined" ? Object : _interfaces.CaptchaOptions
    ])
], CaptchaService);

//# sourceMappingURL=captcha.service.js.map