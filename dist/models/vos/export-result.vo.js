"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExportResultVO", {
    enumerable: true,
    get: function() {
        return ExportResultVO;
    }
});
const _swagger = require("@nestjs/swagger");
const _resultvo = require("./result.vo");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
/**
 * 导出响应对象
 */ let ExportVO = class ExportVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '响应头'
    }),
    _ts_metadata("design:type", typeof Record === "undefined" ? Object : Record)
], ExportVO.prototype, "headers", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '响应体'
    }),
    _ts_metadata("design:type", typeof Buffer === "undefined" ? Object : Buffer)
], ExportVO.prototype, "body", void 0);
let ExportResultVO = class ExportResultVO extends (0, _resultvo.ResultVO)(ExportVO) {
};

//# sourceMappingURL=export-result.vo.js.map