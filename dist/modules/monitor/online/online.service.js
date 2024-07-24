"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OnlineService", {
    enumerable: true,
    get: function() {
        return OnlineService;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _interfaces = require("../../../interfaces");
const _shared = require("../../../shared");
const _utils = require("../../../utils");
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
let OnlineService = class OnlineService {
    async handleFindPage(dto) {
        const { userName, pageNum, pageSize } = dto;
        const prefix = this.configService.get('cache.keyPrefix') || '';
        const tokenKey = _utils.CacheUtil.getTokenKey('*');
        const keys = await this.cacheManager.store.keys(`${prefix}${tokenKey}`);
        const keysPage = _utils.TransformUtil.arrToPage(keys, pageNum, pageSize);
        const list = [];
        if (keysPage) {
            for (let key of keysPage){
                key = key.replace(prefix, '');
                const item = await this.cacheManager.get(key);
                if (userName) {
                    if (item.userName === userName) {
                        list.push(item);
                    }
                } else {
                    list.push(item);
                }
            }
        }
        return {
            pageNum,
            pageSize,
            total: keys.length,
            list
        };
    }
    async handleOffline(id) {
        const isSoloLogin = await this.sharedService.isSoloLogin();
        const tokenKey = _utils.CacheUtil.getTokenKey(id);
        if (isSoloLogin) {
            const { userId } = await this.cacheManager.get(tokenKey);
            const userKey = _utils.CacheUtil.getUserKey(userId);
            await this.cacheManager.del(userKey);
        }
        await this.cacheManager.del(tokenKey);
    }
    constructor(cacheManager, configService, sharedService){
        this.cacheManager = cacheManager;
        this.configService = configService;
        this.sharedService = sharedService;
    }
};
OnlineService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_cachemanager.CACHE_MANAGER)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _interfaces.ICacheManager === "undefined" ? Object : _interfaces.ICacheManager,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService,
        typeof _shared.SharedService === "undefined" ? Object : _shared.SharedService
    ])
], OnlineService);

//# sourceMappingURL=online.service.js.map