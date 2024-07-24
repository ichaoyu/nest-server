"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PageDTO", {
    enumerable: true,
    get: function() {
        return PageDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let PageDTO = class PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '页码',
        default: 1
    }),
    (0, _classvalidator.IsPositive)({
        message: '页码必须是正整数'
    }),
    (0, _classvalidator.Min)(1, {
        message: '页码最小值为 1'
    }),
    _ts_metadata("design:type", Number)
], PageDTO.prototype, "pageNum", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '页长',
        default: 15
    }),
    (0, _classvalidator.IsPositive)({
        message: '页长必须是正整数'
    }),
    (0, _classvalidator.Min)(1, {
        message: '页长最小值为 1'
    }),
    _ts_metadata("design:type", Number)
], PageDTO.prototype, "pageSize", void 0);

//# sourceMappingURL=page.dto.js.map