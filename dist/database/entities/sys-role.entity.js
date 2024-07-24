"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysRoleEntity", {
    enumerable: true,
    get: function() {
        return SysRoleEntity;
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
let SysRoleEntity = class SysRoleEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'role_name'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntity.prototype, "roleName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'role_key'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntity.prototype, "roleKey", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'role_sort'
    }),
    _ts_metadata("design:type", Number)
], SysRoleEntity.prototype, "roleSort", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'status',
        type: 'enum',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysRoleEntity.prototype, "status", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'del_flag',
        type: 'enum',
        enum: _constants.ENTITY_DEL_FLAG
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_DEL_FLAG === "undefined" ? Object : _constants.ENTITY_DEL_FLAG)
], SysRoleEntity.prototype, "delFlag", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'remark'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntity.prototype, "remark", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'create_by'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntity.prototype, "createBy", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)({
        name: 'create_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysRoleEntity.prototype, "createTime", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'update_by'
    }),
    _ts_metadata("design:type", String)
], SysRoleEntity.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)({
        name: 'update_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysRoleEntity.prototype, "updateTime", void 0);
_ts_decorate([
    (0, _typeorm.ManyToMany)(()=>_.SysUserEntity, (user)=>user.roles),
    _ts_metadata("design:type", Array)
], SysRoleEntity.prototype, "users", void 0);
_ts_decorate([
    (0, _typeorm.ManyToMany)(()=>_.SysDeptEntity, (dept)=>dept.roles),
    (0, _typeorm.JoinTable)({
        name: 'sys_role_dept',
        joinColumn: {
            name: 'role_id'
        },
        inverseJoinColumn: {
            name: 'dept_id'
        }
    }),
    _ts_metadata("design:type", Array)
], SysRoleEntity.prototype, "depts", void 0);
_ts_decorate([
    (0, _typeorm.ManyToMany)(()=>_.SysMenuEntity, (menu)=>menu.roles),
    (0, _typeorm.JoinTable)({
        name: 'sys_role_menu',
        joinColumn: {
            name: 'role_id'
        },
        inverseJoinColumn: {
            name: 'menu_id'
        }
    }),
    _ts_metadata("design:type", Array)
], SysRoleEntity.prototype, "menus", void 0);
SysRoleEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'sys_role'
    })
], SysRoleEntity);

//# sourceMappingURL=sys-role.entity.js.map