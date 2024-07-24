"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExcelColumn", {
    enumerable: true,
    get: function() {
        return ExcelColumn;
    }
});
const _classtransformer = require("class-transformer");
const _constants = require("../constants");
function ExcelColumn(options) {
    return (...args)=>{
        Reflect.metadata(_constants.EXCEL_COLUMN_METADATA, options)(...args);
        (0, _classtransformer.Expose)({
            groups: [
                _constants.EXCEL_COLUMN_GROUP
            ]
        })(...args);
    };
}

//# sourceMappingURL=excel.decorator.js.map