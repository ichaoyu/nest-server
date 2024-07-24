"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TreeNodeVO", {
    enumerable: true,
    get: function() {
        return TreeNodeVO;
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
let TreeNodeVO = class TreeNodeVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '标题'
    }),
    _ts_metadata("design:type", String)
], TreeNodeVO.prototype, "title", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '标识'
    }),
    _ts_metadata("design:type", String)
], TreeNodeVO.prototype, "key", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '父标识'
    }),
    _ts_metadata("design:type", String)
], TreeNodeVO.prototype, "parentKey", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '子级',
        type: 'array',
        items: {
            type: 'object'
        }
    }),
    _ts_metadata("design:type", Array)
], TreeNodeVO.prototype, "children", void 0);

//# sourceMappingURL=tree-node.vo.js.map