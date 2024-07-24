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
    SysPostEntityRelationsVO: function() {
        return SysPostEntityRelationsVO;
    },
    SysPostEntityVO: function() {
        return SysPostEntityVO;
    }
});
const _swagger = require("@nestjs/swagger");
const _constants = require("../../constants");
const _ = require(".");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let SysPostEntityVO = class SysPostEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysPostEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '岗位编码'
    }),
    _ts_metadata("design:type", String)
], SysPostEntityVO.prototype, "postCode", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '岗位名称'
    }),
    _ts_metadata("design:type", String)
], SysPostEntityVO.prototype, "postName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '显示顺序'
    }),
    _ts_metadata("design:type", Number)
], SysPostEntityVO.prototype, "postSort", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '状态（0正常 1停用）',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysPostEntityVO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '备注'
    }),
    _ts_metadata("design:type", String)
], SysPostEntityVO.prototype, "remark", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建者'
    }),
    _ts_metadata("design:type", String)
], SysPostEntityVO.prototype, "createBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysPostEntityVO.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新者'
    }),
    _ts_metadata("design:type", String)
], SysPostEntityVO.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysPostEntityVO.prototype, "updateTime", void 0);
let SysPostEntityRelationsVO = class SysPostEntityRelationsVO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '关联用户',
        type: ()=>[
                _.SysUserEntityVO
            ]
    }),
    _ts_metadata("design:type", Array)
], SysPostEntityRelationsVO.prototype, "users", void 0);

//# sourceMappingURL=sys-post-entity.vo.js.map