"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DictDataService", {
    enumerable: true,
    get: function() {
        return DictDataService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _excel = require("../../../../shared/excel");
const _typeorm1 = require("typeorm");
const _constants = require("../../../../constants");
const _database = require("../../../../database");
const _shared = require("../../../../shared");
const _dictdataserialize = require("./dict-data.serialize");
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
let DictDataService = class DictDataService {
    async handleFindPage(dto) {
        const { pageNum, pageSize, ...where } = dto;
        const [list, total] = await this.dictDataModel.findAndCount({
            where: {
                ...where
            },
            order: {
                dictSort: 'ASC'
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
    async handleGetList(dictType) {
        return await this.dictDataModel.findBy({
            dictType,
            status: _constants.ENTITY_STATUS.NORMAL
        });
    }
    async handleCreate(dto) {
        const { dictValue, dictType } = dto;
        const { userName } = this.contextService.getPayload();
        const existDictData = await this.dictDataModel.findOneBy({
            dictValue,
            dictType
        });
        if (existDictData) {
            throw new _common.BadRequestException(_constants.MESSAGES.DICT_DATA_EXIST);
        }
        await this.dictDataModel.insert({
            ...dto,
            createBy: userName
        });
    }
    async handleUpdate(id, dto) {
        const { userName } = this.contextService.getPayload();
        const existDictData = await this.dictDataModel.findOneBy({
            id
        });
        if (!existDictData) {
            throw new _common.BadRequestException(_constants.MESSAGES.DICT_DATA_NOT_EXIST);
        }
        await this.dictDataModel.update(id, {
            ...dto,
            updateBy: userName
        });
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        await this.dictDataModel.delete(ids);
    }
    async handleExportPage(dto) {
        const { list } = await this.handleFindPage(dto);
        return await this.excelService.handleExport({
            sheetName: '字典数据',
            fileName: '字典数据报表',
            Cls: _dictdataserialize.DictDataExportSerialize,
            data: list
        });
    }
    constructor(excelService, dictDataModel, contextService){
        this.excelService = excelService;
        this.dictDataModel = dictDataModel;
        this.contextService = contextService;
    }
};
DictDataService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_excel.EXCEL_SERVICE)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysDictDataEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _excel.ExcelService === "undefined" ? Object : _excel.ExcelService,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService
    ])
], DictDataService);

//# sourceMappingURL=dict-data.service.js.map