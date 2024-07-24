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
    SysDeptEntityRelationsVO: function() {
        return SysDeptEntityRelationsVO;
    },
    SysDeptEntityVO: function() {
        return SysDeptEntityVO;
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
let SysDeptEntityVO = class SysDeptEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '上级主键'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntityVO.prototype, "parentId", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '祖级列表'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntityVO.prototype, "ancestors", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '部门名称'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntityVO.prototype, "deptName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '显示顺序'
    }),
    _ts_metadata("design:type", Number)
], SysDeptEntityVO.prototype, "orderNum", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '负责人'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntityVO.prototype, "leader", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '联系电话'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntityVO.prototype, "phone", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '邮箱'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntityVO.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '部门状态（0正常 1停用）',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysDeptEntityVO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '删除标志（0存在 2删除）',
        enum: _constants.ENTITY_DEL_FLAG
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_DEL_FLAG === "undefined" ? Object : _constants.ENTITY_DEL_FLAG)
], SysDeptEntityVO.prototype, "delFlag", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建者'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntityVO.prototype, "createBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDeptEntityVO.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新者'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntityVO.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDeptEntityVO.prototype, "updateTime", void 0);
let SysDeptEntityRelationsVO = class SysDeptEntityRelationsVO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '关联角色',
        type: ()=>[
                _.SysRoleEntityVO
            ]
    }),
    _ts_metadata("design:type", Array)
], SysDeptEntityRelationsVO.prototype, "roles", void 0);

//# sourceMappingURL=sys-dept-entity.vo.js.map