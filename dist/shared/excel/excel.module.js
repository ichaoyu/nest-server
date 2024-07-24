"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExcelModule", {
    enumerable: true,
    get: function() {
        return ExcelModule;
    }
});
const _common = require("@nestjs/common");
const _constants = require("../../constants");
const _excelservice = require("./excel.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ExcelModule = class ExcelModule {
    static registerAsync(params) {
        const { global } = params;
        let ExcelCoreModule = class ExcelCoreModule {
            static create() {
                return {
                    global,
                    module: ExcelCoreModule,
                    providers: [
                        {
                            provide: _constants.EXCEL_SERVICE,
                            useClass: _excelservice.ExcelService
                        }
                    ],
                    exports: [
                        _constants.EXCEL_SERVICE
                    ]
                };
            }
        };
        ExcelCoreModule = _ts_decorate([
            (0, _common.Module)({})
        ], ExcelCoreModule);
        return ExcelCoreModule.create();
    }
};

//# sourceMappingURL=excel.module.js.map