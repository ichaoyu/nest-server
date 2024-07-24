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
    GetCurrentUserInfoVO: function() {
        return GetCurrentUserInfoVO;
    },
    GetCurrentUserProfileVO: function() {
        return GetCurrentUserProfileVO;
    }
});
const _swagger = require("@nestjs/swagger");
const _database = require("../../database");
const _models = require("../../models");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
/**
 * 元信息响应传输对象
 */ let MetaVO = class MetaVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '标题'
    }),
    _ts_metadata("design:type", String)
], MetaVO.prototype, "title", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '图标'
    }),
    _ts_metadata("design:type", String)
], MetaVO.prototype, "icon", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '排序'
    }),
    _ts_metadata("design:type", Number)
], MetaVO.prototype, "sort", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '是否隐藏'
    }),
    _ts_metadata("design:type", Boolean)
], MetaVO.prototype, "hidden", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '是否缓存'
    }),
    _ts_metadata("design:type", Boolean)
], MetaVO.prototype, "noCache", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '是否一直显示'
    }),
    _ts_metadata("design:type", Boolean)
], MetaVO.prototype, "alwaysShow", void 0);
/**
 * 用户菜单响应传输对象
 */ let UserMenuVO = class UserMenuVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '标识'
    }),
    _ts_metadata("design:type", String)
], UserMenuVO.prototype, "key", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '父级标识'
    }),
    _ts_metadata("design:type", String)
], UserMenuVO.prototype, "parentKey", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '路由地址'
    }),
    _ts_metadata("design:type", String)
], UserMenuVO.prototype, "path", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '组件名称'
    }),
    _ts_metadata("design:type", String)
], UserMenuVO.prototype, "name", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '跳转地址'
    }),
    _ts_metadata("design:type", String)
], UserMenuVO.prototype, "redirect", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '组件路径'
    }),
    _ts_metadata("design:type", String)
], UserMenuVO.prototype, "component", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '组件路径'
    }),
    _ts_metadata("design:type", String)
], UserMenuVO.prototype, "componentName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '元信息',
        type: MetaVO
    }),
    _ts_metadata("design:type", typeof IMeta === "undefined" ? Object : IMeta)
], UserMenuVO.prototype, "meta", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '子菜单',
        type: 'array',
        items: {
            type: 'object'
        }
    }),
    _ts_metadata("design:type", Array)
], UserMenuVO.prototype, "children", void 0);
/**
 * 当前用户信息响应传输对象
 */ let CurrentUserInfoVO = class CurrentUserInfoVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '菜单列表',
        type: 'array',
        items: {
            $ref: (0, _swagger.getSchemaPath)(UserMenuVO)
        }
    }),
    _ts_metadata("design:type", Object)
], CurrentUserInfoVO.prototype, "menus", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '角色列表',
        type: 'array',
        items: {
            type: 'string'
        }
    }),
    _ts_metadata("design:type", Array)
], CurrentUserInfoVO.prototype, "roles", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '权限列表',
        type: 'array',
        items: {
            type: 'string'
        }
    }),
    _ts_metadata("design:type", Array)
], CurrentUserInfoVO.prototype, "permissions", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '当前用户信息',
        type: _database.SysUserEntityVO
    }),
    _ts_metadata("design:type", typeof _database.SysUserEntityVO === "undefined" ? Object : _database.SysUserEntityVO)
], CurrentUserInfoVO.prototype, "user", void 0);
CurrentUserInfoVO = _ts_decorate([
    (0, _swagger.ApiExtraModels)(UserMenuVO)
], CurrentUserInfoVO);
let GetCurrentUserInfoVO = class GetCurrentUserInfoVO extends (0, _models.ResultVO)(CurrentUserInfoVO) {
};
/**
 * 当前用户配置响应传输对象
 */ let CurrentUserProfileVO = class CurrentUserProfileVO extends _database.SysUserEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '岗位组'
    }),
    _ts_metadata("design:type", String)
], CurrentUserProfileVO.prototype, "postGroup", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '角色组'
    }),
    _ts_metadata("design:type", String)
], CurrentUserProfileVO.prototype, "roleGroup", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '部门名称'
    }),
    _ts_metadata("design:type", String)
], CurrentUserProfileVO.prototype, "deptName", void 0);
let GetCurrentUserProfileVO = class GetCurrentUserProfileVO extends (0, _models.ResultVO)(CurrentUserProfileVO) {
};

//# sourceMappingURL=current-user.vo.js.map