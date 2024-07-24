"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ConfigController", {
    enumerable: true,
    get: function() {
        return ConfigController;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _models = require("../../../models");
const _configdto = require("./config.dto");
const _configservice = require("./config.service");
const _configvo = require("./config.vo");
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
let ConfigController = class ConfigController {
    async findPage(dto) {
        return await this.configService.handleFindPage(dto);
    }
    async getValue(key) {
        return await this.configService.handleGetValue(key);
    }
    async create(dto) {
        await this.configService.handleCreate(dto);
    }
    async update(id, dto) {
        await this.configService.handleUpdate(id, dto);
    }
    async deleteMany(dto) {
        await this.configService.handleDeleteMany(dto);
    }
    async exportPage(dto) {
        return await this.configService.handleExportPage(dto);
    }
    constructor(configService){
        this.configService = configService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询参数分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _configvo.FindConfigPageVO
    }),
    (0, _decorators.Permission)('system:config:list'),
    (0, _common.Post)('/page'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _configdto.FindConfigPageDTO === "undefined" ? Object : _configdto.FindConfigPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], ConfigController.prototype, "findPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取参数值'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _configvo.GetConfigValueVO
    }),
    (0, _swagger.ApiQuery)({
        name: 'key',
        description: '参数键名'
    }),
    (0, _decorators.Permission)('system:config:list'),
    (0, _cachemanager.CacheKey)(_constants.CACHES.SYS_CONFIG_KEY),
    (0, _cachemanager.CacheTTL)(15 * 1000),
    (0, _common.Get)('/value'),
    _ts_param(0, (0, _common.Query)('key')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], ConfigController.prototype, "getValue", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '新增参数'
    }),
    (0, _decorators.OperLog)({
        title: '参数配置',
        bizType: _constants.ENTITY_BIZ_TYPE.INSERT
    }),
    (0, _decorators.Permission)('system:config:add'),
    (0, _common.Post)('/create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _configdto.CreateConfigDTO === "undefined" ? Object : _configdto.CreateConfigDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], ConfigController.prototype, "create", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新参数'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '参数配置',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:config:edit'),
    (0, _common.Put)('/update'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _configdto.UpdateConfigDTO === "undefined" ? Object : _configdto.UpdateConfigDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], ConfigController.prototype, "update", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除参数'
    }),
    (0, _decorators.OperLog)({
        title: '参数配置',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('system:config:remove'),
    (0, _common.Delete)('/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], ConfigController.prototype, "deleteMany", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导出参数分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _models.ExportResultVO
    }),
    (0, _decorators.OperLog)({
        title: '参数配置',
        bizType: _constants.ENTITY_BIZ_TYPE.EXPORT
    }),
    (0, _decorators.Permission)('system:config:export'),
    (0, _common.Post)('/export'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _configdto.FindConfigPageDTO === "undefined" ? Object : _configdto.FindConfigPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], ConfigController.prototype, "exportPage", null);
ConfigController = _ts_decorate([
    (0, _swagger.ApiTags)('参数接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/system/config'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _configservice.ConfigService === "undefined" ? Object : _configservice.ConfigService
    ])
], ConfigController);

//# sourceMappingURL=config.controller.js.map