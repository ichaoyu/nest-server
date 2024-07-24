"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DictTypeController", {
    enumerable: true,
    get: function() {
        return DictTypeController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../../constants");
const _decorators = require("../../../../decorators");
const _models = require("../../../../models");
const _dicttypedto = require("./dict-type.dto");
const _dicttypeservice = require("./dict-type.service");
const _dicttypevo = require("./dict-type.vo");
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
let DictTypeController = class DictTypeController {
    async findPage(dto) {
        return await this.dictTypeService.handleFindPage(dto);
    }
    async create(dto) {
        await this.dictTypeService.handleCreate(dto);
    }
    async update(id, dto) {
        await this.dictTypeService.handleUpdate(id, dto);
    }
    async deleteMany(dto) {
        await this.dictTypeService.handleDeleteMany(dto);
    }
    async getDictType(id) {
        return await this.dictTypeService.handleGetDictType(id);
    }
    async exportPage(dto) {
        return await this.dictTypeService.handleExportPage(dto);
    }
    constructor(dictTypeService){
        this.dictTypeService = dictTypeService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询字典类型分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _dicttypevo.FindDictTypePageVO
    }),
    (0, _decorators.Permission)('system:dict:list'),
    (0, _common.Post)('/page'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dicttypedto.FindDictTypePageDTO === "undefined" ? Object : _dicttypedto.FindDictTypePageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DictTypeController.prototype, "findPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '新增字典类型'
    }),
    (0, _decorators.OperLog)({
        title: '字典类型',
        bizType: _constants.ENTITY_BIZ_TYPE.INSERT
    }),
    (0, _decorators.Permission)('system:dict:add'),
    (0, _common.Post)('/create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dicttypedto.CreateDictTypeDTO === "undefined" ? Object : _dicttypedto.CreateDictTypeDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DictTypeController.prototype, "create", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新字典类型'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '字典类型',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:dict:edit'),
    (0, _common.Put)('/update'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _dicttypedto.UpdateDictTypeDTO === "undefined" ? Object : _dicttypedto.UpdateDictTypeDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DictTypeController.prototype, "update", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除字典类型'
    }),
    (0, _decorators.OperLog)({
        title: '字典类型',
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
], DictTypeController.prototype, "deleteMany", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取字典类型'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _dicttypevo.GetDictTypeVO
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.Permission)('system:dict:list'),
    (0, _common.Get)('/'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], DictTypeController.prototype, "getDictType", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导出字典类型分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _models.ExportResultVO
    }),
    (0, _decorators.OperLog)({
        title: '字典类型',
        bizType: _constants.ENTITY_BIZ_TYPE.EXPORT
    }),
    (0, _decorators.Permission)('system:dict:export'),
    (0, _common.Post)('/export'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dicttypedto.FindDictTypePageDTO === "undefined" ? Object : _dicttypedto.FindDictTypePageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DictTypeController.prototype, "exportPage", null);
DictTypeController = _ts_decorate([
    (0, _swagger.ApiTags)('字典类型接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/system/dict/type'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dicttypeservice.DictTypeService === "undefined" ? Object : _dicttypeservice.DictTypeService
    ])
], DictTypeController);

//# sourceMappingURL=dict-type.controller.js.map