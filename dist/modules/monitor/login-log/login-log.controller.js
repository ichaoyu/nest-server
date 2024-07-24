"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginLogController", {
    enumerable: true,
    get: function() {
        return LoginLogController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _models = require("../../../models");
const _loginlogdto = require("./login-log.dto");
const _loginlogservice = require("./login-log.service");
const _loginlogvo = require("./login-log.vo");
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
let LoginLogController = class LoginLogController {
    async findPage(dto) {
        return await this.loginLogService.handleFindPage(dto);
    }
    async exportPage(dto) {
        return await this.loginLogService.handleExportPage(dto);
    }
    async deleteMany(dto) {
        await this.loginLogService.handleDeleteMany(dto);
    }
    async clear() {
        await this.loginLogService.handleClear();
    }
    constructor(loginLogService){
        this.loginLogService = loginLogService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询登录日志分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _loginlogvo.FindLoginLogPageVO
    }),
    (0, _decorators.Permission)('monitor:loginLog:list'),
    (0, _common.Post)('/page'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _loginlogdto.FindLoginLogPageDTO === "undefined" ? Object : _loginlogdto.FindLoginLogPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], LoginLogController.prototype, "findPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导出登录日志分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _models.ExportResultVO
    }),
    (0, _decorators.OperLog)({
        title: '登录日志',
        bizType: _constants.ENTITY_BIZ_TYPE.EXPORT
    }),
    (0, _decorators.Permission)('monitor:loginLog:export'),
    (0, _common.Post)('/export'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _loginlogdto.FindLoginLogPageDTO === "undefined" ? Object : _loginlogdto.FindLoginLogPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], LoginLogController.prototype, "exportPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除登录日志'
    }),
    (0, _decorators.OperLog)({
        title: '登录日志',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('monitor:loginLog:remove'),
    (0, _common.Delete)('/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], LoginLogController.prototype, "deleteMany", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '清空登录日志'
    }),
    (0, _decorators.OperLog)({
        title: '登录日志',
        bizType: _constants.ENTITY_BIZ_TYPE.CLEAN
    }),
    (0, _decorators.Permission)('monitor:loginLog:remove'),
    (0, _common.Delete)('/clear'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], LoginLogController.prototype, "clear", null);
LoginLogController = _ts_decorate([
    (0, _swagger.ApiTags)('登录日志接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/monitor/loginLog'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _loginlogservice.LoginLogService === "undefined" ? Object : _loginlogservice.LoginLogService
    ])
], LoginLogController);

//# sourceMappingURL=login-log.controller.js.map