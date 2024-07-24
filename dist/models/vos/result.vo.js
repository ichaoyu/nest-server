"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ResultVO", {
    enumerable: true,
    get: function() {
        return ResultVO;
    }
});
const _swagger = require("@nestjs/swagger");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function ResultVO(classRef) {
    let Result = class Result {
    };
    _ts_decorate([
        (0, _swagger.ApiProperty)({
            description: '时间戳',
            example: 1606827398000
        }),
        _ts_metadata("design:type", Number)
    ], Result.prototype, "timestamp", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)({
            description: '状态码',
            example: 200
        }),
        _ts_metadata("design:type", Number)
    ], Result.prototype, "status", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)({
            description: '响应消息',
            example: 'ok'
        }),
        _ts_metadata("design:type", String)
    ], Result.prototype, "message", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)({
            description: '响应数据',
            type: classRef
        }),
        _ts_metadata("design:type", typeof T === "undefined" ? Object : T)
    ], Result.prototype, "data", void 0);
    return Result;
}

//# sourceMappingURL=result.vo.js.map