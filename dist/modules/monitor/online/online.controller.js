"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OnlineController", {
    enumerable: true,
    get: function() {
        return OnlineController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _onlinedto = require("./online.dto");
const _onlineservice = require("./online.service");
const _onlinevo = require("./online.vo");
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
let OnlineController = class OnlineController {
    async findPage(dto) {
        return await this.onlineService.handleFindPage(dto);
    }
    async offline(id) {
        await this.onlineService.handleOffline(id);
    }
    constructor(onlineService){
        this.onlineService = onlineService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询在线分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _onlinevo.FindOnlinePageVO
    }),
    (0, _decorators.Permission)('monitor:online:list'),
    (0, _common.Post)('/page'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _onlinedto.FindOnlinePageDTO === "undefined" ? Object : _onlinedto.FindOnlinePageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], OnlineController.prototype, "findPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '用户下线'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '会话编号'
    }),
    (0, _decorators.OperLog)({
        title: '在线用户',
        bizType: _constants.ENTITY_BIZ_TYPE.FORCE
    }),
    (0, _decorators.Permission)('monitor:online:delete'),
    (0, _common.Delete)('/'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], OnlineController.prototype, "offline", null);
OnlineController = _ts_decorate([
    (0, _swagger.ApiTags)('在线用户接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/monitor/online'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _onlineservice.OnlineService === "undefined" ? Object : _onlineservice.OnlineService
    ])
], OnlineController);

//# sourceMappingURL=online.controller.js.map