"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PageVO", {
    enumerable: true,
    get: function() {
        return PageVO;
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
function PageVO(classRef) {
    let Page = class Page {
    };
    _ts_decorate([
        (0, _swagger.ApiProperty)({
            description: '页码'
        }),
        _ts_metadata("design:type", Number)
    ], Page.prototype, "pageNum", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)({
            description: '页长'
        }),
        _ts_metadata("design:type", Number)
    ], Page.prototype, "pageSize", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)({
            description: '总数'
        }),
        _ts_metadata("design:type", Number)
    ], Page.prototype, "total", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)({
            description: '列表',
            type: [
                classRef
            ]
        }),
        _ts_metadata("design:type", Array)
    ], Page.prototype, "list", void 0);
    return Page;
}

//# sourceMappingURL=page.vo.js.map