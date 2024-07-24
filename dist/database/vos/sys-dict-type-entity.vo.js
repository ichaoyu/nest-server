"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysDictTypeEntityVO", {
    enumerable: true,
    get: function() {
        return SysDictTypeEntityVO;
    }
});
const _swagger = require("@nestjs/swagger");
const _constants = require("../../constants");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let SysDictTypeEntityVO = class SysDictTypeEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysDictTypeEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典名称'
    }),
    _ts_metadata("design:type", String)
], SysDictTypeEntityVO.prototype, "dictName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典类型'
    }),
    _ts_metadata("design:type", String)
], SysDictTypeEntityVO.prototype, "dictType", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '状态（0正常 1停用）',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysDictTypeEntityVO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '备注'
    }),
    _ts_metadata("design:type", String)
], SysDictTypeEntityVO.prototype, "remark", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建者'
    }),
    _ts_metadata("design:type", String)
], SysDictTypeEntityVO.prototype, "createBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDictTypeEntityVO.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新者'
    }),
    _ts_metadata("design:type", String)
], SysDictTypeEntityVO.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDictTypeEntityVO.prototype, "updateTime", void 0);

//# sourceMappingURL=sys-dict-type-entity.vo.js.map