"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OperLogService", {
    enumerable: true,
    get: function() {
        return OperLogService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _excel = require("../../../shared/excel");
const _typeorm1 = require("typeorm");
const _database = require("../../../database");
const _operlogserialize = require("./oper-log.serialize");
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
let OperLogService = class OperLogService {
    async handleFindPage(dto) {
        const { pageNum, pageSize, beginDate, endDate, operIp, operName, title, ...where } = dto;
        const [list, total] = await this.operLogModel.findAndCount({
            where: {
                ...where,
                title: title ? (0, _typeorm1.Like)(`%${title}%`) : null,
                operIp: operIp ? (0, _typeorm1.Like)(`%${operIp}%`) : null,
                operName: operName ? (0, _typeorm1.Like)(`%${operName}%`) : null,
                operTime: beginDate ? (0, _typeorm1.Between)(beginDate, endDate) : null
            },
            order: {
                operTime: 'DESC'
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
    async handleExportPage(dto) {
        const { list } = await this.handleFindPage(dto);
        return await this.excelService.handleExport({
            sheetName: '操作日志',
            fileName: '操作日志报表',
            Cls: _operlogserialize.OperLogExportSerialize,
            data: list
        });
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        await this.operLogModel.delete(ids);
    }
    async handleClear() {
        await this.operLogModel.clear();
    }
    constructor(excelService, operLogModel){
        this.excelService = excelService;
        this.operLogModel = operLogModel;
    }
};
OperLogService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_excel.EXCEL_SERVICE)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysOperLogEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _excel.ExcelService === "undefined" ? Object : _excel.ExcelService,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], OperLogService);

//# sourceMappingURL=oper-log.service.js.map