"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CacheService", {
    enumerable: true,
    get: function() {
        return CacheService;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _constants = require("../../../constants");
const _interfaces = require("../../../interfaces");
const _cacheutil = require("./cache.util");
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
let CacheService = class CacheService {
    async handleGetNames() {
        const list = new Array();
        list.push((0, _cacheutil.createCacheModel)({
            cacheName: _constants.CACHES.LOGIN_TOKEN_KEY,
            remark: '会话信息'
        }), (0, _cacheutil.createCacheModel)({
            cacheName: _constants.CACHES.LOGIN_USER_KEY,
            remark: '用户信息'
        }), (0, _cacheutil.createCacheModel)({
            cacheName: _constants.CACHES.SYS_CONFIG_KEY,
            remark: '配置信息'
        }), (0, _cacheutil.createCacheModel)({
            cacheName: _constants.CACHES.SYS_DICT_KEY,
            remark: '数据字典'
        }));
        return list;
    }
    async handleGetKeys(name) {
        return await this.getKeys(name);
    }
    async handleClearName(name) {
        const keys = await this.getKeys(name);
        for (const key of keys){
            await this.cacheManager.del(key);
        }
    }
    async handleGetValue(key) {
        const cacheValue = await this.cacheManager.get(key);
        const [cacheName, cacheKey] = key.split(':');
        return {
            cacheName,
            cacheKey,
            cacheValue
        };
    }
    async handleClearKey(key) {
        await this.cacheManager.del(key);
    }
    async getKeys(name) {
        const prefix = this.configService.get('cache.keyPrefix') || '';
        let keys = await this.cacheManager.store.keys(`${prefix}${name}:*`);
        keys = keys.map((key)=>key.replace(prefix, ''));
        return keys;
    }
    constructor(cacheManager, configService){
        this.cacheManager = cacheManager;
        this.configService = configService;
    }
};
CacheService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_cachemanager.CACHE_MANAGER)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _interfaces.ICacheManager === "undefined" ? Object : _interfaces.ICacheManager,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], CacheService);

//# sourceMappingURL=cache.service.js.map