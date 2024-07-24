"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoleController", {
    enumerable: true,
    get: function() {
        return RoleController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _models = require("../../../models");
const _roledto = require("./role.dto");
const _roleservice = require("./role.service");
const _rolevo = require("./role.vo");
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
let RoleController = class RoleController {
    async findPage(dto) {
        return await this.roleService.handleFindPage(dto);
    }
    async create(dto) {
        await this.roleService.handleCreate(dto);
    }
    async update(id, dto) {
        await this.roleService.handleUpdate(id, dto);
    }
    async deleteMany(dto) {
        await this.roleService.handleDeleteMany(dto);
    }
    async exportPage(dto) {
        return await this.roleService.handleExportPage(dto);
    }
    async toggleStatus(id) {
        await this.roleService.handleToggleStatus(id);
    }
    async findAllocatedPage(id, dto) {
        return await this.roleService.handleFindAllocatedPage(id, dto);
    }
    async cancelAllocated(id, dto) {
        await this.roleService.handleCancelAllocated(id, dto);
    }
    async findUnallocatedPage(id, dto) {
        return await this.roleService.handleFindUnallocatedPage(id, dto);
    }
    async allocate(id, dto) {
        await this.roleService.handleAllocate(id, dto);
    }
    constructor(roleService){
        this.roleService = roleService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询角色分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _rolevo.FindRolePageVO
    }),
    (0, _decorators.Permission)('system:role:list'),
    (0, _common.Post)('/page'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _roledto.FindRolePageDTO === "undefined" ? Object : _roledto.FindRolePageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "findPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '新增角色'
    }),
    (0, _decorators.OperLog)({
        title: '角色管理',
        bizType: _constants.ENTITY_BIZ_TYPE.INSERT
    }),
    (0, _decorators.Permission)('system:role:add'),
    (0, _common.Post)('/create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _roledto.CreateRoleDTO === "undefined" ? Object : _roledto.CreateRoleDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新角色'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '角色管理',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:role:edit'),
    (0, _common.Put)('/update'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _roledto.UpdateRoleDTO === "undefined" ? Object : _roledto.UpdateRoleDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除角色'
    }),
    (0, _decorators.OperLog)({
        title: '角色管理',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('system:role:remove'),
    (0, _common.Delete)('/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "deleteMany", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导出角色分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _models.ExportResultVO
    }),
    (0, _decorators.OperLog)({
        title: '角色管理',
        bizType: _constants.ENTITY_BIZ_TYPE.EXPORT
    }),
    (0, _decorators.Permission)('system:role:export'),
    (0, _common.Post)('/export'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _roledto.FindRolePageDTO === "undefined" ? Object : _roledto.FindRolePageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "exportPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '切换角色状态'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '角色管理',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:role:edit'),
    (0, _common.Put)('/toggleStatus'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "toggleStatus", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取角色绑定的用户分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _rolevo.FindAllocatedPageVO
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.Permission)('system:role:list'),
    (0, _common.Post)('/allocatedPage'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _roledto.FindAllocatedPageDTO === "undefined" ? Object : _roledto.FindAllocatedPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "findAllocatedPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '取消角色绑定的用户'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '角色管理',
        bizType: _constants.ENTITY_BIZ_TYPE.GRANT
    }),
    (0, _decorators.Permission)('system:role:edit'),
    (0, _common.Put)('/cancelAllocated'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "cancelAllocated", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取未绑定角色的用户分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _rolevo.FindUnallocatedPageVO
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.Permission)('system:role:list'),
    (0, _common.Post)('/unallocatedPage'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _roledto.FindUnallocatedPageDTO === "undefined" ? Object : _roledto.FindUnallocatedPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "findUnallocatedPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '角色绑定用户'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '角色管理',
        bizType: _constants.ENTITY_BIZ_TYPE.GRANT
    }),
    (0, _decorators.Permission)('system:role:edit'),
    (0, _common.Put)('/allocate'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _roledto.AllocateDTO === "undefined" ? Object : _roledto.AllocateDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], RoleController.prototype, "allocate", null);
RoleController = _ts_decorate([
    (0, _swagger.ApiTags)('角色接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/system/role'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _roleservice.RoleService === "undefined" ? Object : _roleservice.RoleService
    ])
], RoleController);

//# sourceMappingURL=role.controller.js.map