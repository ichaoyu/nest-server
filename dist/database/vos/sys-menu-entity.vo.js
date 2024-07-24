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
    SysMenuEntityRelationsVO: function() {
        return SysMenuEntityRelationsVO;
    },
    SysMenuEntityVO: function() {
        return SysMenuEntityVO;
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
let SysMenuEntityVO = class SysMenuEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '菜单名称'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "menuName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '上级主键'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "parentId", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '显示顺序'
    }),
    _ts_metadata("design:type", Number)
], SysMenuEntityVO.prototype, "orderNum", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '路由地址'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "path", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '组件路径'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "component", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '路由重定向地址'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "redirect", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '是否为外链（0是 1否）',
        enum: _constants.ENTITY_IS_FRAME
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_IS_FRAME === "undefined" ? Object : _constants.ENTITY_IS_FRAME)
], SysMenuEntityVO.prototype, "isFrame", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '是否缓存（0缓存 1不缓存）',
        enum: _constants.ENTITY_IS_CACHE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_IS_CACHE === "undefined" ? Object : _constants.ENTITY_IS_CACHE)
], SysMenuEntityVO.prototype, "isCache", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '菜单类型（M目录 C菜单 F按钮）',
        enum: _constants.ENTITY_MENU_TYPE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_MENU_TYPE === "undefined" ? Object : _constants.ENTITY_MENU_TYPE)
], SysMenuEntityVO.prototype, "menuType", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '菜单状态（0显示 1隐藏）',
        enum: _constants.ENTITY_VISIBLE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_VISIBLE === "undefined" ? Object : _constants.ENTITY_VISIBLE)
], SysMenuEntityVO.prototype, "visible", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '菜单状态（0正常 1停用）',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysMenuEntityVO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '权限标识'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "perms", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '菜单图标'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "icon", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '备注'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "remark", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建者'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "createBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysMenuEntityVO.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新者'
    }),
    _ts_metadata("design:type", String)
], SysMenuEntityVO.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysMenuEntityVO.prototype, "updateTime", void 0);
let SysMenuEntityRelationsVO = class SysMenuEntityRelationsVO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '关联角色',
        type: ()=>[
                _.SysRoleEntityVO
            ]
    }),
    _ts_metadata("design:type", Array)
], SysMenuEntityRelationsVO.prototype, "roles", void 0);

//# sourceMappingURL=sys-menu-entity.vo.js.map