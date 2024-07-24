"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SiteController", {
    enumerable: true,
    get: function() {
        return SiteController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _decorators = require("../../../decorators");
const _constants = require("../../../constants");
const _siteservice = require("./site.service");
const _sitevo = require("./site.vo");
const _sitedto = require("./site.dto");
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
let SiteController = class SiteController {
    async getInfo(id) {
        return await this.SiteService.handleGetSiteInfo(id);
    }
    async updateInfo(id, dto) {
        return await this.SiteService.handleUpdateSiteInfo(id, dto);
    }
    constructor(SiteService){
        this.SiteService = SiteService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取网站配置'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键',
        example: '1'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _sitevo.GetSiteInfoVO
    }),
    (0, _decorators.Permission)('website:info:all'),
    (0, _common.Get)('/get'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], SiteController.prototype, "getInfo", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新网站配置'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键',
        example: '1'
    }),
    (0, _decorators.OperLog)({
        title: '更新网站配置',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('website:info:edit'),
    (0, _common.Put)('/update'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _sitedto.UpdateConfigDTO === "undefined" ? Object : _sitedto.UpdateConfigDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], SiteController.prototype, "updateInfo", null);
SiteController = _ts_decorate([
    (0, _swagger.ApiTags)('网站配置接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/website/info'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _siteservice.SiteService === "undefined" ? Object : _siteservice.SiteService
    ])
], SiteController);

//# sourceMappingURL=site.controller.js.map