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
    CreateMenuDTO: function() {
        return CreateMenuDTO;
    },
    FindMenuListDTO: function() {
        return FindMenuListDTO;
    },
    UpdateMenuDTO: function() {
        return UpdateMenuDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
const _constants = require("../../../constants");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let FindMenuListDTO = class FindMenuListDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '菜单名称'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindMenuListDTO.prototype, "menuName", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '状态',
        enum: _constants.ENTITY_STATUS
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], FindMenuListDTO.prototype, "status", void 0);
let CreateMenuDTO = class CreateMenuDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '上级菜单'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '上级菜单不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateMenuDTO.prototype, "parentId", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '地址'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateMenuDTO.prototype, "path", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '组件'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateMenuDTO.prototype, "component", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '重定向地址'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateMenuDTO.prototype, "redirect", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '是否为外链',
        enum: _constants.ENTITY_IS_FRAME,
        default: _constants.ENTITY_IS_FRAME.YES
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_IS_FRAME, {
        message: '是否为外链非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_IS_FRAME === "undefined" ? Object : _constants.ENTITY_IS_FRAME)
], CreateMenuDTO.prototype, "isFrame", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '是否缓存',
        enum: _constants.ENTITY_IS_CACHE,
        default: _constants.ENTITY_IS_CACHE.YES
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '是否缓存不能为空'
    }),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_IS_CACHE, {
        message: '是否缓存非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_IS_CACHE === "undefined" ? Object : _constants.ENTITY_IS_CACHE)
], CreateMenuDTO.prototype, "isCache", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '菜单类型',
        enum: _constants.ENTITY_MENU_TYPE
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '菜单类型不能为空'
    }),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_MENU_TYPE, {
        message: '菜单类型非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_MENU_TYPE === "undefined" ? Object : _constants.ENTITY_MENU_TYPE)
], CreateMenuDTO.prototype, "menuType", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '菜单名称'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '菜单名称不能为空'
    }),
    _ts_metadata("design:type", String)
], CreateMenuDTO.prototype, "menuName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '显示顺序'
    }),
    (0, _classvalidator.IsPositive)({
        message: '显示顺序为正整数'
    }),
    _ts_metadata("design:type", Number)
], CreateMenuDTO.prototype, "orderNum", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '是否可见',
        enum: _constants.ENTITY_VISIBLE,
        default: _constants.ENTITY_VISIBLE.YES
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '是否可见不能为空'
    }),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_VISIBLE, {
        message: '是否可见非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_VISIBLE === "undefined" ? Object : _constants.ENTITY_VISIBLE)
], CreateMenuDTO.prototype, "visible", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '状态',
        enum: _constants.ENTITY_STATUS
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], CreateMenuDTO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '权限'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateMenuDTO.prototype, "perms", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '图标'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreateMenuDTO.prototype, "icon", void 0);
let UpdateMenuDTO = class UpdateMenuDTO extends CreateMenuDTO {
};

//# sourceMappingURL=menu.dto.js.map