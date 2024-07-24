"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ExcelJS: function() {
        return _exceljs.default;
    },
    ExcelService: function() {
        return ExcelService;
    }
});
const _nodecrypto = require("node:crypto");
const _common = require("@nestjs/common");
const _classtransformer = require("class-transformer");
const _exceljs = /*#__PURE__*/ _interop_require_default(require("exceljs"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ExcelService = class ExcelService {
    /**
   * 处理生成
   * @param {ExcelCreateOptions} options 生成参数
   */ async handleCreate(options) {
        const wb = new _exceljs.default.Workbook();
        const ws = wb.addWorksheet(options.sheetName, options.addWorksheetOptions);
        const columns = this.getColumns(options.Cls);
        ws.columns = columns;
        const buffer = await wb.xlsx.writeBuffer();
        const headers = this.getHeaders(options.fileName);
        return {
            headers,
            body: buffer
        };
    }
    /**
   * 处理导出
   * @param {ExcelExportOptions} options 导出参数
   */ async handleExport(options) {
        const wb = new _exceljs.default.Workbook();
        const ws = wb.addWorksheet(options.sheetName, options.addWorksheetOptions);
        const columns = this.getColumns(options.Cls);
        const rows = this.getRows(options.Cls, options.data);
        ws.columns = columns;
        ws.addRows(rows);
        const buffer = await wb.xlsx.writeBuffer();
        const headers = this.getHeaders(options.fileName);
        return {
            headers,
            body: buffer
        };
    }
    /**
   * 处理导入
   * @param {ExcelImportOptions} options 导入参数
   */ async handleImport(options) {
        const wb = new _exceljs.default.Workbook();
        if (options.filePath) {
            await wb.xlsx.readFile(options.filePath);
        } else if (options.fileData) {
            await wb.xlsx.load(options.fileData);
        } else {
            throw new _common.BadRequestException('filePath or fileData must be required');
        }
        const ws = wb.getWorksheet(options.sheetName);
        const length = ws.rowCount;
        const rows = ws.getRows(2, length - 1);
        const columns = this.getColumns(options.Cls);
        ws.columns = columns;
        const arr = [];
        for (const row of rows){
            const obj = Object.create({});
            for (const column of columns){
                obj[column.key] = row.getCell(column.key).value;
            }
            arr.push(obj);
        }
        return arr;
    }
    /**
   * 获取表格列
   * @param {any} Cls 序列化类
   * @private
   */ getColumns(Cls) {
        const columns = [];
        const obj = (0, _classtransformer.instanceToPlain)(new Cls({}), {
            groups: [
                _constants.EXCEL_COLUMN_GROUP
            ]
        });
        const keys = Object.keys(obj);
        for (const key of keys){
            const result = Reflect.getMetadata(_constants.EXCEL_COLUMN_METADATA, Cls.prototype, key);
            if (result) {
                columns.push({
                    key,
                    ...result
                });
            }
        }
        return columns;
    }
    /**
   * 获取表格行
   * @param {any} Cls 序列化类
   * @param {any} data 数据
   * @private
   */ getRows(Cls, data) {
        return data.map((v)=>(0, _classtransformer.instanceToPlain)(new Cls(v), {
                groups: [
                    _constants.EXCEL_COLUMN_GROUP
                ]
            }));
    }
    /**
   * 获取响应头
   * @param {string} filename 文件名
   * @private
   */ getHeaders(filename) {
        const name = filename ? encodeURIComponent(filename) : (0, _nodecrypto.randomUUID)();
        return {
            'content-type': 'application/vnd.openxmlformats;charset=utf-8',
            'content-disposition': `attachment; filename=${name}.xlsx`
        };
    }
};
ExcelService = _ts_decorate([
    (0, _common.Injectable)()
], ExcelService);

//# sourceMappingURL=excel.service.js.map