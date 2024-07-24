"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SiteService", {
    enumerable: true,
    get: function() {
        return SiteService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _constants = require("../../../constants");
const _database = require("../../../database");
const _shared = require("../../../shared");
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
let SiteService = class SiteService {
    // 获取网站配置
    async handleGetSiteInfo(id) {
        const info = await this.siteModel.findOneBy({
            id
        });
        return info;
    }
    // 更新网站配置
    async handleUpdateSiteInfo(id, dto) {
        const { userName } = this.contextService.getPayload();
        const existConfig = await this.siteModel.findOneBy({
            id
        });
        if (!existConfig) {
            throw new _common.BadRequestException(_constants.MESSAGES.CONFIG_NOT_EXIST);
        }
        await this.siteModel.update(id, {
            ...dto,
            updateBy: userName
        });
    }
    constructor(siteModel, contextService){
        this.siteModel = siteModel;
        this.contextService = contextService;
    }
};
SiteService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_database.WebSiteInfoEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService
    ])
], SiteService);

//# sourceMappingURL=site.service.js.map