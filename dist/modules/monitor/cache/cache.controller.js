"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CacheController", {
    enumerable: true,
    get: function() {
        return CacheController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _cacheservice = require("./cache.service");
const _cachevo = require("./cache.vo");
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
let CacheController = class CacheController {
    async getNames() {
        return await this.cacheService.handleGetNames();
    }
    async getKeys(name) {
        return await this.cacheService.handleGetKeys(name);
    }
    async clearName(name) {
        return await this.cacheService.handleClearName(name);
    }
    async getValue(key) {
        return await this.cacheService.handleGetValue(key);
    }
    async clearKey(key) {
        return await this.cacheService.handleClearKey(key);
    }
    constructor(cacheService){
        this.cacheService = cacheService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取缓存名称列表'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _cachevo.GetCacheNamesVO
    }),
    (0, _decorators.Permission)('monitor:cache:list'),
    (0, _common.Get)('/getNames'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], CacheController.prototype, "getNames", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '通过名称获取缓存键名列表'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _cachevo.GetCacheKeysVO
    }),
    (0, _swagger.ApiQuery)({
        name: 'name',
        description: '缓存名称'
    }),
    (0, _decorators.Permission)('monitor:cache:list'),
    (0, _common.Get)('/getKeys'),
    _ts_param(0, (0, _common.Query)('name')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CacheController.prototype, "getKeys", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '通过名称清除缓存'
    }),
    (0, _swagger.ApiQuery)({
        name: 'name',
        description: '缓存名称'
    }),
    (0, _decorators.OperLog)({
        title: '缓存',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('monitor:cache:list'),
    (0, _common.Delete)('/clearName'),
    _ts_param(0, (0, _common.Query)('name')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CacheController.prototype, "clearName", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '通过键名获取缓存值'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _cachevo.GetCacheValueVO
    }),
    (0, _swagger.ApiQuery)({
        name: 'key',
        description: '缓存键名'
    }),
    (0, _decorators.Permission)('monitor:cache:list'),
    (0, _common.Get)('/value'),
    _ts_param(0, (0, _common.Query)('key')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CacheController.prototype, "getValue", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '通过键名清除缓存'
    }),
    (0, _swagger.ApiQuery)({
        name: 'key',
        description: '缓存键名'
    }),
    (0, _decorators.OperLog)({
        title: '缓存',
        bizType: _constants.ENTITY_BIZ_TYPE.CLEAN
    }),
    (0, _decorators.Permission)('monitor:cache:list'),
    (0, _common.Delete)('/clearKey'),
    _ts_param(0, (0, _common.Query)('key')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CacheController.prototype, "clearKey", null);
CacheController = _ts_decorate([
    (0, _swagger.ApiBearerAuth)(),
    (0, _swagger.ApiTags)('缓存接口'),
    (0, _common.Controller)('/monitor/cache'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _cacheservice.CacheService === "undefined" ? Object : _cacheservice.CacheService
    ])
], CacheController);

//# sourceMappingURL=cache.controller.js.map