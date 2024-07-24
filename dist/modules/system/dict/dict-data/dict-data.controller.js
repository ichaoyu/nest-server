"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DictDataController", {
    enumerable: true,
    get: function() {
        return DictDataController;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../../constants");
const _decorators = require("../../../../decorators");
const _models = require("../../../../models");
const _dictdatadto = require("./dict-data.dto");
const _dictdataservice = require("./dict-data.service");
const _dictdatavo = require("./dict-data.vo");
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
let DictDataController = class DictDataController {
    async findPage(dto) {
        return await this.dictDataService.handleFindPage(dto);
    }
    async getList(dictType) {
        return await this.dictDataService.handleGetList(dictType);
    }
    async create(dto) {
        await this.dictDataService.handleCreate(dto);
    }
    async update(id, dto) {
        await this.dictDataService.handleUpdate(id, dto);
    }
    async deleteMany(dto) {
        await this.dictDataService.handleDeleteMany(dto);
    }
    async exportPage(dto) {
        return await this.dictDataService.handleExportPage(dto);
    }
    constructor(dictDataService){
        this.dictDataService = dictDataService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取字典数据分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _dictdatavo.FindDictDataPageVO
    }),
    (0, _decorators.Permission)('system:dict:list'),
    (0, _common.Post)('/page'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dictdatadto.FindDictDataPageDTO === "undefined" ? Object : _dictdatadto.FindDictDataPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DictDataController.prototype, "findPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取字典数据列表'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _dictdatavo.GetDictDataListVO
    }),
    (0, _swagger.ApiQuery)({
        name: 'dictType',
        description: '字典类型'
    }),
    (0, _decorators.Permission)('system:dict:list'),
    (0, _cachemanager.CacheKey)(_constants.CACHES.SYS_DICT_KEY),
    (0, _cachemanager.CacheTTL)(15 * 1000),
    (0, _common.Get)('/list'),
    _ts_param(0, (0, _common.Query)('dictType')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], DictDataController.prototype, "getList", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '新增字典数据'
    }),
    (0, _decorators.OperLog)({
        title: '字典数据',
        bizType: _constants.ENTITY_BIZ_TYPE.INSERT
    }),
    (0, _decorators.Permission)('system:dict:add'),
    (0, _common.Post)('/create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dictdatadto.CreateDictDataDTO === "undefined" ? Object : _dictdatadto.CreateDictDataDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DictDataController.prototype, "create", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新字典数据'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '字典数据',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:dict:edit'),
    (0, _common.Put)('/update'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _dictdatadto.UpdateDictDataDTO === "undefined" ? Object : _dictdatadto.UpdateDictDataDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DictDataController.prototype, "update", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除字典数据'
    }),
    (0, _decorators.OperLog)({
        title: '字典数据',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('system:dict:remove'),
    (0, _common.Delete)('/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DictDataController.prototype, "deleteMany", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导出字典数据分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _models.ExportResultVO
    }),
    (0, _decorators.OperLog)({
        title: '字典数据',
        bizType: _constants.ENTITY_BIZ_TYPE.EXPORT
    }),
    (0, _decorators.Permission)('system:dict:export'),
    (0, _common.Post)('/export'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dictdatadto.FindDictDataPageDTO === "undefined" ? Object : _dictdatadto.FindDictDataPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DictDataController.prototype, "exportPage", null);
DictDataController = _ts_decorate([
    (0, _swagger.ApiTags)('字典数据接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/system/dict/data'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dictdataservice.DictDataService === "undefined" ? Object : _dictdataservice.DictDataService
    ])
], DictDataController);

//# sourceMappingURL=dict-data.controller.js.map