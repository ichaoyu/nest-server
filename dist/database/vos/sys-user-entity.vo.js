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
    SysUserEntityRelationsVO: function() {
        return SysUserEntityRelationsVO;
    },
    SysUserEntityVO: function() {
        return SysUserEntityVO;
    }
});
const _swagger = require("@nestjs/swagger");
const _constants = require("../../constants");
const _ = require(".");
const _entities = require("../entities");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let SysUserEntityVO = class SysUserEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户账号'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "userName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户昵称'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "nickName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户邮箱'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '手机号码'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "phone", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户性别（0男 1女 2未知）',
        enum: _constants.ENTITY_SEX
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_SEX === "undefined" ? Object : _constants.ENTITY_SEX)
], SysUserEntityVO.prototype, "sex", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '头像地址'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "avatar", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户密码'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "password", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '状态（0正常 1停用）',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysUserEntityVO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '删除标志（0存在 2删除）',
        enum: _constants.ENTITY_DEL_FLAG
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_DEL_FLAG === "undefined" ? Object : _constants.ENTITY_DEL_FLAG)
], SysUserEntityVO.prototype, "delFlag", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '最后登录 IP'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "loginIp", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '最后登录时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysUserEntityVO.prototype, "loginDate", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '备注'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "remark", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建者'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "createBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysUserEntityVO.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新者'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityVO.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysUserEntityVO.prototype, "updateTime", void 0);
let SysUserEntityRelationsVO = class SysUserEntityRelationsVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '部门主键'
    }),
    _ts_metadata("design:type", String)
], SysUserEntityRelationsVO.prototype, "deptId", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '关联部门',
        type: ()=>_.SysDeptEntityVO
    }),
    _ts_metadata("design:type", typeof _entities.SysDeptEntity === "undefined" ? Object : _entities.SysDeptEntity)
], SysUserEntityRelationsVO.prototype, "dept", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '关联角色',
        type: ()=>[
                _.SysRoleEntityVO
            ]
    }),
    _ts_metadata("design:type", Array)
], SysUserEntityRelationsVO.prototype, "roles", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '关联岗位',
        type: ()=>[
                _.SysPostEntityVO
            ]
    }),
    _ts_metadata("design:type", Array)
], SysUserEntityRelationsVO.prototype, "posts", void 0);

//# sourceMappingURL=sys-user-entity.vo.js.map