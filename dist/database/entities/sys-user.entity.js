"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysUserEntity", {
    enumerable: true,
    get: function() {
        return SysUserEntity;
    }
});
const _typeorm = require("typeorm");
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
let SysUserEntity = class SysUserEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'user_name'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "userName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'nick_name'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "nickName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'email'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "email", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'phone'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "phone", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'sex',
        type: 'enum',
        enum: _constants.ENTITY_SEX
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_SEX === "undefined" ? Object : _constants.ENTITY_SEX)
], SysUserEntity.prototype, "sex", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'avatar'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "avatar", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'password',
        select: false
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "password", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'status',
        type: 'enum',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysUserEntity.prototype, "status", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'del_flag',
        type: 'enum',
        enum: _constants.ENTITY_DEL_FLAG
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_DEL_FLAG === "undefined" ? Object : _constants.ENTITY_DEL_FLAG)
], SysUserEntity.prototype, "delFlag", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'login_ip'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "loginIp", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'login_date'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysUserEntity.prototype, "loginDate", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'remark'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "remark", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'create_by'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "createBy", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)({
        name: 'create_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysUserEntity.prototype, "createTime", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'update_by'
    }),
    _ts_metadata("design:type", String)
], SysUserEntity.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)({
        name: 'update_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysUserEntity.prototype, "updateTime", void 0);
_ts_decorate([
    (0, _typeorm.OneToOne)(()=>_.SysDeptEntity),
    (0, _typeorm.JoinColumn)({
        name: 'dept_id'
    }),
    _ts_metadata("design:type", typeof _.SysDeptEntity === "undefined" ? Object : _.SysDeptEntity)
], SysUserEntity.prototype, "dept", void 0);
_ts_decorate([
    (0, _typeorm.ManyToMany)(()=>_.SysRoleEntity, (role)=>role.users),
    (0, _typeorm.JoinTable)({
        name: 'sys_user_role',
        joinColumn: {
            name: 'user_id'
        },
        inverseJoinColumn: {
            name: 'role_id'
        }
    }),
    _ts_metadata("design:type", Array)
], SysUserEntity.prototype, "roles", void 0);
_ts_decorate([
    (0, _typeorm.ManyToMany)(()=>_.SysPostEntity, (post)=>post.users),
    (0, _typeorm.JoinTable)({
        name: 'sys_user_post',
        joinColumn: {
            name: 'user_id'
        },
        inverseJoinColumn: {
            name: 'post_id'
        }
    }),
    _ts_metadata("design:type", Array)
], SysUserEntity.prototype, "posts", void 0);
SysUserEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'sys_user'
    })
], SysUserEntity);

//# sourceMappingURL=sys-user.entity.js.map