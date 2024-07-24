"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MenuController", {
    enumerable: true,
    get: function() {
        return MenuController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _models = require("../../../models");
const _menudto = require("./menu.dto");
const _menuservice = require("./menu.service");
const _menuvo = require("./menu.vo");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let MenuController = class MenuController {
    async findList(dto) {
        return await this.menuService.handleFindList(dto);
    }
    async getTree() {
        return await this.menuService.handleGetTree();
    }
    async create(dto) {
        await this.menuService.handleCreate(dto);
    }
    async update(id, dto) {
        await this.menuService.handleUpdate(id, dto);
    }
    async deleteMany(dto) {
        await this.menuService.handleDeleteMany(dto);
    }
    constructor(menuService){
        this.menuService = menuService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询菜单列表'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _menuvo.FindMenuListVO
    }),
    (0, _decorators.Permission)('system:menu:list'),
    (0, _common.Post)('/list'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _menudto.FindMenuListDTO === "undefined" ? Object : _menudto.FindMenuListDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], MenuController.prototype, "findList", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取菜单树'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _menuvo.GetMenuTreeVO
    }),
    (0, _decorators.Permission)('system:menu:list'),
    (0, _common.Get)('/tree'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], MenuController.prototype, "getTree", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '新增菜单'
    }),
    (0, _decorators.OperLog)({
        title: '菜单管理',
        bizType: _constants.ENTITY_BIZ_TYPE.INSERT
    }),
    (0, _decorators.Permission)('system:menu:add'),
    (0, _common.Post)('/create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _menudto.CreateMenuDTO === "undefined" ? Object : _menudto.CreateMenuDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], MenuController.prototype, "create", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新菜单'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '菜单管理',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:menu:edit'),
    (0, _common.Put)('/update'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _menudto.UpdateMenuDTO === "undefined" ? Object : _menudto.UpdateMenuDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], MenuController.prototype, "update", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除菜单列表'
    }),
    (0, _decorators.OperLog)({
        title: '菜单管理',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('system:menu:remove'),
    (0, _common.Delete)('/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], MenuController.prototype, "deleteMany", null);
MenuController = _ts_decorate([
    (0, _swagger.ApiTags)('菜单接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/system/menu'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _menuservice.MenuService === "undefined" ? Object : _menuservice.MenuService
    ])
], MenuController);

//# sourceMappingURL=menu.controller.js.map