"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysDictDataEntityVO", {
    enumerable: true,
    get: function() {
        return SysDictDataEntityVO;
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
let SysDictDataEntityVO = class SysDictDataEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '显示顺序'
    }),
    _ts_metadata("design:type", Number)
], SysDictDataEntityVO.prototype, "dictSort", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典标签'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntityVO.prototype, "dictLabel", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典键值'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntityVO.prototype, "dictValue", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '字典类型'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntityVO.prototype, "dictType", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '是否默认（Y是 N否）',
        enum: _constants.ENTITY_IS_DEFAULT
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_IS_DEFAULT === "undefined" ? Object : _constants.ENTITY_IS_DEFAULT)
], SysDictDataEntityVO.prototype, "isDefault", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '状态（0正常 1停用）',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysDictDataEntityVO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '备注'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntityVO.prototype, "remark", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建者'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntityVO.prototype, "createBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDictDataEntityVO.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新者'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntityVO.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDictDataEntityVO.prototype, "updateTime", void 0);

//# sourceMappingURL=sys-dict-data-entity.vo.js.map