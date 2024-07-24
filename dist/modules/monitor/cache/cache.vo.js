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
    GetCacheKeysVO: function() {
        return GetCacheKeysVO;
    },
    GetCacheNamesVO: function() {
        return GetCacheNamesVO;
    },
    GetCacheValueVO: function() {
        return GetCacheValueVO;
    }
});
const _swagger = require("@nestjs/swagger");
const _models = require("../../../models");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
/**
 * 缓存模型响应传输对象
 */ let CacheModelVO = class CacheModelVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '缓存名称'
    }),
    _ts_metadata("design:type", String)
], CacheModelVO.prototype, "cacheName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '备注'
    }),
    _ts_metadata("design:type", String)
], CacheModelVO.prototype, "remark", void 0);
let GetCacheNamesVO = class GetCacheNamesVO extends (0, _models.ResultVO)([
    CacheModelVO
]) {
};
let GetCacheKeysVO = class GetCacheKeysVO extends (0, _models.ResultVO)([
    String
]) {
};
/**
 * 缓存键值响应传输对象
 */ let CacheValueVO = class CacheValueVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '缓存名称'
    }),
    _ts_metadata("design:type", String)
], CacheValueVO.prototype, "cacheName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '缓存键名'
    }),
    _ts_metadata("design:type", String)
], CacheValueVO.prototype, "cacheKey", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '缓存键值'
    }),
    _ts_metadata("design:type", String)
], CacheValueVO.prototype, "cacheValue", void 0);
let GetCacheValueVO = class GetCacheValueVO extends (0, _models.ResultVO)(CacheValueVO) {
};

//# sourceMappingURL=cache.vo.js.map