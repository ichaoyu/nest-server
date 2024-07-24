"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ConfigService", {
    enumerable: true,
    get: function() {
        return ConfigService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _excel = require("../../../shared/excel");
const _typeorm1 = require("typeorm");
const _constants = require("../../../constants");
const _database = require("../../../database");
const _shared = require("../../../shared");
const _configserialize = require("./config.serialize");
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
let ConfigService = class ConfigService {
    async handleFindPage(dto) {
        const { pageNum, pageSize, beginDate, endDate, ...rest } = dto;
        const [list, total] = await this.configModel.findAndCount({
            where: {
                createTime: beginDate ? (0, _typeorm1.Between)(beginDate, endDate) : null,
                ...rest
            },
            take: pageSize,
            skip: (pageNum - 1) * pageSize
        });
        return {
            pageNum,
            pageSize,
            total,
            list
        };
    }
    async handleGetValue(key) {
        return await this.configModel.findOneBy({
            configKey: key
        });
    }
    async handleCreate(dto) {
        const { configKey } = dto;
        const { userName } = this.contextService.getPayload();
        const existConfig = await this.configModel.findOneBy({
            configKey
        });
        if (existConfig) {
            throw new _common.BadRequestException(_constants.MESSAGES.CONFIG_EXIST);
        }
        await this.configModel.insert({
            ...dto,
            createBy: userName
        });
    }
    async handleUpdate(id, dto) {
        const { userName } = this.contextService.getPayload();
        const existConfig = await this.configModel.findOneBy({
            id
        });
        if (!existConfig) {
            throw new _common.BadRequestException(_constants.MESSAGES.CONFIG_NOT_EXIST);
        }
        await this.configModel.update(id, {
            ...dto,
            updateBy: userName
        });
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        await this.configModel.delete(ids);
    }
    async handleExportPage(dto) {
        const { list } = await this.handleFindPage(dto);
        return await this.excelService.handleExport({
            sheetName: '配置',
            fileName: '配置报表',
            Cls: _configserialize.ConfigExportSerialize,
            data: list
        });
    }
    constructor(excelService, configModel, contextService){
        this.excelService = excelService;
        this.configModel = configModel;
        this.contextService = contextService;
    }
};
ConfigService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_excel.EXCEL_SERVICE)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysConfigEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _excel.ExcelService === "undefined" ? Object : _excel.ExcelService,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService
    ])
], ConfigService);

//# sourceMappingURL=config.service.js.map