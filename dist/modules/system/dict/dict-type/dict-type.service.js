"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DictTypeService", {
    enumerable: true,
    get: function() {
        return DictTypeService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _excel = require("../../../../shared/excel");
const _typeorm1 = require("typeorm");
const _constants = require("../../../../constants");
const _database = require("../../../../database");
const _shared = require("../../../../shared");
const _dicttypeserialize = require("./dict-type.serialize");
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
let DictTypeService = class DictTypeService {
    async handleFindPage(dto) {
        const { pageNum, pageSize, ...where } = dto;
        const [list, total] = await this.dictTypeModel.findAndCount({
            where: {
                ...where
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
    async handleCreate(dto) {
        const { dictType } = dto;
        const { userName } = this.contextService.getPayload();
        const existDictType = await this.dictTypeModel.findOneBy({
            dictType
        });
        if (existDictType) {
            throw new _common.BadRequestException(_constants.MESSAGES.DICT_TYPE_EXIST);
        }
        await this.dictTypeModel.insert({
            ...dto,
            createBy: userName
        });
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        await this.dictTypeModel.delete(ids);
    }
    async handleUpdate(id, dto) {
        const { userName } = this.contextService.getPayload();
        const existDictType = await this.dictTypeModel.findOneBy({
            id
        });
        if (!existDictType) {
            throw new _common.BadRequestException(_constants.MESSAGES.DICT_TYPE_NOT_EXIST);
        }
        await this.dictTypeModel.update(id, {
            ...dto,
            updateBy: userName
        });
    }
    async handleGetDictType(id) {
        return await this.dictTypeModel.findOneBy({
            id
        });
    }
    async handleExportPage(dto) {
        const { list } = await this.handleFindPage(dto);
        return await this.excelService.handleExport({
            sheetName: '字典类型',
            fileName: '字典类型报表',
            Cls: _dicttypeserialize.DictTypeExportSerialize,
            data: list
        });
    }
    constructor(excelService, dictTypeModel, contextService){
        this.excelService = excelService;
        this.dictTypeModel = dictTypeModel;
        this.contextService = contextService;
    }
};
DictTypeService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_excel.EXCEL_SERVICE)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysDictTypeEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _excel.ExcelService === "undefined" ? Object : _excel.ExcelService,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService
    ])
], DictTypeService);

//# sourceMappingURL=dict-type.service.js.map