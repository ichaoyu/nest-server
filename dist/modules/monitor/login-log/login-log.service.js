"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginLogService", {
    enumerable: true,
    get: function() {
        return LoginLogService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _excel = require("../../../shared/excel");
const _typeorm1 = require("typeorm");
const _database = require("../../../database");
const _loginlogserialize = require("./login-log.serialize");
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
let LoginLogService = class LoginLogService {
    async handleFindPage(dto) {
        const { pageNum, pageSize, beginDate, endDate, loginIp, userName, ...where } = dto;
        const [list, total] = await this.loginLogModel.findAndCount({
            where: {
                ...where,
                userName: userName ? (0, _typeorm1.Like)(`%${userName}%`) : null,
                loginIp: loginIp ? (0, _typeorm1.Like)(`%${loginIp}%`) : null,
                loginDate: beginDate ? (0, _typeorm1.Between)(beginDate, endDate) : null
            },
            order: {
                loginDate: 'DESC'
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
            sheetName: '登录日志',
            fileName: '登录日志报表',
            Cls: _loginlogserialize.LoginLogExportSerialize,
            data: list
        });
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        await this.loginLogModel.delete(ids);
    }
    async handleClear() {
        await this.loginLogModel.clear();
    }
    constructor(excelService, loginLogModel){
        this.excelService = excelService;
        this.loginLogModel = loginLogModel;
    }
};
LoginLogService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_excel.EXCEL_SERVICE)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysLoginLogEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _excel.ExcelService === "undefined" ? Object : _excel.ExcelService,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], LoginLogService);

//# sourceMappingURL=login-log.service.js.map