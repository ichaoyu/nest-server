"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CacheKeyInterceptor", {
    enumerable: true,
    get: function() {
        return CacheKeyInterceptor;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _constants = require("../constants");
const _utils = require("../utils");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CacheKeyInterceptor = class CacheKeyInterceptor extends _cachemanager.CacheInterceptor {
    trackBy(context) {
        const request = context.switchToHttp().getRequest();
        const cacheKey = this.reflector.get(_cachemanager.CACHE_KEY_METADATA, context.getHandler());
        if (!cacheKey) {
            return '';
        }
        if (cacheKey === _constants.CACHES.SYS_CONFIG_KEY) {
            // @ts-ignore
            return _utils.CacheUtil.getConfigKey(request.query.key);
        }
        if (cacheKey === _constants.CACHES.SYS_DICT_KEY) {
            // @ts-ignore
            return _utils.CacheUtil.getDictKey(request.query.dictType);
        }
        return cacheKey;
    }
};
CacheKeyInterceptor = _ts_decorate([
    (0, _common.Injectable)()
], CacheKeyInterceptor);

//# sourceMappingURL=cache.interceptor.js.map