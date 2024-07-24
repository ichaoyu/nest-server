"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OperLogController", {
    enumerable: true,
    get: function() {
        return OperLogController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _models = require("../../../models");
const _operlogdto = require("./oper-log.dto");
const _operlogservice = require("./oper-log.service");
const _operlogvo = require("./oper-log.vo");
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
let OperLogController = class OperLogController {
    async findPage(dto) {
        return await this.operLogService.handleFindPage(dto);
    }
    async exportPage(dto) {
        return await this.operLogService.handleExportPage(dto);
    }
    async deleteMany(dto) {
        await this.operLogService.handleDeleteMany(dto);
    }
    async clear() {
        await this.operLogService.handleClear();
    }
    constructor(operLogService){
        this.operLogService = operLogService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询操作日志分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _operlogvo.FindOperLogPageVO
    }),
    (0, _decorators.Permission)('monitor:operLog:list'),
    (0, _common.Post)('/page'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _operlogdto.FindOperLogPageDTO === "undefined" ? Object : _operlogdto.FindOperLogPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], OperLogController.prototype, "findPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导出操作日志分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _models.ExportResultVO
    }),
    (0, _decorators.OperLog)({
        title: '操作日志',
        bizType: _constants.ENTITY_BIZ_TYPE.EXPORT
    }),
    (0, _decorators.Permission)('monitor:operLog:export'),
    (0, _common.Post)('/export'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _operlogdto.FindOperLogPageDTO === "undefined" ? Object : _operlogdto.FindOperLogPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], OperLogController.prototype, "exportPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除操作日志'
    }),
    (0, _decorators.OperLog)({
        title: '操作日志',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('monitor:operLog:remove'),
    (0, _common.Delete)('/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], OperLogController.prototype, "deleteMany", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '清空操作日志'
    }),
    (0, _decorators.OperLog)({
        title: '操作日志',
        bizType: _constants.ENTITY_BIZ_TYPE.CLEAN
    }),
    (0, _decorators.Permission)('monitor:operLog:remove'),
    (0, _common.Delete)('/clear'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], OperLogController.prototype, "clear", null);
OperLogController = _ts_decorate([
    (0, _swagger.ApiTags)('操作日志接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/monitor/operLog'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _operlogservice.OperLogService === "undefined" ? Object : _operlogservice.OperLogService
    ])
], OperLogController);

//# sourceMappingURL=oper-log.controller.js.map