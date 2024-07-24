"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysMenuEntity", {
    enumerable: true,
    get: function() {
        return SysMenuEntity;
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
let SysMenuEntity = class SysMenuEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'menu_name'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "menuName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'parent_id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "parentId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'order_num'
    }),
    _ts_metadata("design:type", Number)
], SysMenuEntity.prototype, "orderNum", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'path'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "path", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'component'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "component", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'redirect'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "redirect", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'is_frame',
        type: 'enum',
        enum: _constants.ENTITY_IS_FRAME
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_IS_FRAME === "undefined" ? Object : _constants.ENTITY_IS_FRAME)
], SysMenuEntity.prototype, "isFrame", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'is_cache',
        type: 'enum',
        enum: _constants.ENTITY_IS_CACHE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_IS_CACHE === "undefined" ? Object : _constants.ENTITY_IS_CACHE)
], SysMenuEntity.prototype, "isCache", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'menu_type',
        type: 'enum',
        enum: _constants.ENTITY_MENU_TYPE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_MENU_TYPE === "undefined" ? Object : _constants.ENTITY_MENU_TYPE)
], SysMenuEntity.prototype, "menuType", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'visible',
        type: 'enum',
        enum: _constants.ENTITY_VISIBLE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_VISIBLE === "undefined" ? Object : _constants.ENTITY_VISIBLE)
], SysMenuEntity.prototype, "visible", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'status',
        type: 'enum',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysMenuEntity.prototype, "status", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'perms'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "perms", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'icon'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "icon", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'remark'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "remark", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'create_by'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "createBy", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)({
        name: 'create_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysMenuEntity.prototype, "createTime", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'update_by'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntity.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)({
        name: 'update_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysMenuEntity.prototype, "updateTime", void 0);
_ts_decorate([
    (0, _typeorm.ManyToMany)(()=>_.SysRoleEntity, (role)=>role.menus),
    _ts_metadata("design:type", Array)
], SysMenuEntity.prototype, "roles", void 0);
SysMenuEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'sys_menu'
    })
], SysMenuEntity);

//# sourceMappingURL=sys-menu.entity.js.map