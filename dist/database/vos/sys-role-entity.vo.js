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
    SysRoleEntityRelationsVO: function() {
        return SysRoleEntityRelationsVO;
    },
    SysRoleEntityVO: function() {
        return SysRoleEntityVO;
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
let SysRoleEntityVO = class SysRoleEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '角色名称'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntityVO.prototype, "roleName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '角色权限字符串'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntityVO.prototype, "roleKey", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '显示顺序'
    }),
    _ts_metadata("design:type", Number)
], SysRoleEntityVO.prototype, "roleSort", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '角色状态（0正常 1停用）',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysRoleEntityVO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '删除标志（0存在 2删除）',
        enum: _constants.ENTITY_DEL_FLAG
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_DEL_FLAG === "undefined" ? Object : _constants.ENTITY_DEL_FLAG)
], SysRoleEntityVO.prototype, "delFlag", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '备注'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntityVO.prototype, "remark", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建者'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntityVO.prototype, "createBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysRoleEntityVO.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新者'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntityVO.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysRoleEntityVO.prototype, "updateTime", void 0);
let SysRoleEntityRelationsVO = class SysRoleEntityRelationsVO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '关联用户',
        type: ()=>[
                _.SysUserEntityVO
            ]
    }),
    _ts_metadata("design:type", Array)
], SysRoleEntityRelationsVO.prototype, "users", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '关联部门',
        type: ()=>[
                _.SysDeptEntityVO
            ]
    }),
    _ts_metadata("design:type", Array)
], SysRoleEntityRelationsVO.prototype, "depts", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '关联菜单',
        type: ()=>[
                _.SysMenuEntityVO
            ]
    }),
    _ts_metadata("design:type", Array)
], SysRoleEntityRelationsVO.prototype, "menus", void 0);

//# sourceMappingURL=sys-role-entity.vo.js.map