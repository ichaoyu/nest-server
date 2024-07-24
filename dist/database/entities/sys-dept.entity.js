"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysDeptEntity", {
    enumerable: true,
    get: function() {
        return SysDeptEntity;
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
let SysDeptEntity = class SysDeptEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'parent_id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntity.prototype, "parentId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'ancestors'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntity.prototype, "ancestors", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'dept_name'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntity.prototype, "deptName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'order_num'
    }),
    _ts_metadata("design:type", Number)
], SysDeptEntity.prototype, "orderNum", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'leader'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntity.prototype, "leader", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'phone'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntity.prototype, "phone", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'email'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntity.prototype, "email", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'status',
        type: 'enum',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysDeptEntity.prototype, "status", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'del_flag',
        type: 'enum',
        enum: _constants.ENTITY_DEL_FLAG
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_DEL_FLAG === "undefined" ? Object : _constants.ENTITY_DEL_FLAG)
], SysDeptEntity.prototype, "delFlag", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'create_by'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntity.prototype, "createBy", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)({
        name: 'create_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDeptEntity.prototype, "createTime", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'update_by'
    }),
    _ts_metadata("design:type", String)
], SysDeptEntity.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)({
        name: 'update_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDeptEntity.prototype, "updateTime", void 0);
_ts_decorate([
    (0, _typeorm.ManyToMany)(()=>_.SysRoleEntity, (role)=>role.depts),
    _ts_metadata("design:type", Array)
], SysDeptEntity.prototype, "roles", void 0);
SysDeptEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'sys_dept'
    })
], SysDeptEntity);

//# sourceMappingURL=sys-dept.entity.js.map