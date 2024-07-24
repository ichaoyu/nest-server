"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserController", {
    enumerable: true,
    get: function() {
        return UserController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _interfaces = require("../../../interfaces");
const _models = require("../../../models");
const _userdto = require("./user.dto");
const _userservice = require("./user.service");
const _uservo = require("./user.vo");
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
let UserController = class UserController {
    async findPage(dto) {
        return await this.userService.handleFindPage(dto);
    }
    async getFormAddData() {
        return await this.userService.handleGetFormData();
    }
    async getFormEditData(id) {
        return await this.userService.handleGetFormData(id);
    }
    async create(dto) {
        await this.userService.handleCreate(dto);
    }
    async updateUser(id, dto) {
        await this.userService.handleUpdate(id, dto);
    }
    async deleteMany(dto) {
        await this.userService.handleDeleteMany(dto);
    }
    async importTemplate(files) {
        return await this.userService.handleImportTemplate(files[0]);
    }
    async exportTemplate() {
        return await this.userService.handleExportTemplate();
    }
    async exportPage(dto) {
        return await this.userService.handleExportPage(dto);
    }
    async resetPassword(id, dto) {
        await this.userService.handleResetPassword(id, dto);
    }
    async toggleStatus(id) {
        await this.userService.handleToggleStatus(id);
    }
    constructor(userService){
        this.userService = userService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询用户分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _uservo.FindUserPageVO
    }),
    (0, _decorators.Permission)('system:user:list'),
    (0, _common.Post)('/page'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdto.FindUserPageDTO === "undefined" ? Object : _userdto.FindUserPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "findPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取用户新增表单数据'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _uservo.GetUserAddFormDataVO
    }),
    (0, _decorators.Permission)('system:user:list'),
    (0, _common.Get)('/formAddData'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "getFormAddData", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取用户编辑表单数据'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _uservo.GetUserEditFormDataVO
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.Permission)('system:user:list'),
    (0, _common.Get)('/formEditData'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "getFormEditData", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '新增用户'
    }),
    (0, _decorators.OperLog)({
        title: '用户管理',
        bizType: _constants.ENTITY_BIZ_TYPE.INSERT
    }),
    (0, _decorators.Permission)('system:user:add'),
    (0, _common.Post)('/create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdto.CreateUserDTO === "undefined" ? Object : _userdto.CreateUserDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新用户'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '用户管理',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:user:edit'),
    (0, _common.Put)('/update'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdto.UpdateUserDTO === "undefined" ? Object : _userdto.UpdateUserDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除用户'
    }),
    (0, _decorators.OperLog)({
        title: '用户管理',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('system:user:remove'),
    (0, _common.Delete)('/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "deleteMany", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导入用户模板'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _uservo.ImportUserTemplateVO
    }),
    (0, _swagger.ApiConsumes)('multipart/form-data'),
    (0, _swagger.ApiBody)({
        description: '用户模板',
        type: _models.UploadFileDTO
    }),
    (0, _decorators.OperLog)({
        title: '用户管理',
        bizType: _constants.ENTITY_BIZ_TYPE.IMPORT
    }),
    (0, _decorators.Permission)('system:user:import'),
    (0, _common.Post)('/template/import'),
    _ts_param(0, (0, _decorators.Files)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _interfaces.IFiles === "undefined" ? Object : _interfaces.IFiles
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "importTemplate", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导出用户模板'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _models.ExportResultVO
    }),
    (0, _decorators.OperLog)({
        title: '用户管理',
        bizType: _constants.ENTITY_BIZ_TYPE.EXPORT
    }),
    (0, _decorators.Permission)('system:user:export'),
    (0, _common.Post)('/template/export'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "exportTemplate", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导出用户分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _models.ExportResultVO
    }),
    (0, _decorators.OperLog)({
        title: '用户管理',
        bizType: _constants.ENTITY_BIZ_TYPE.EXPORT
    }),
    (0, _decorators.Permission)('system:user:export'),
    (0, _common.Post)('/page/export'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdto.FindUserPageDTO === "undefined" ? Object : _userdto.FindUserPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "exportPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '重置密码'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '用户管理',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:user:edit'),
    (0, _common.Put)('/resetPassword'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdto.ResetPasswordDTO === "undefined" ? Object : _userdto.ResetPasswordDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '切换用户状态'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '用户管理',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:user:edit'),
    (0, _common.Put)('/toggleStatus'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], UserController.prototype, "toggleStatus", null);
UserController = _ts_decorate([
    (0, _swagger.ApiTags)('用户接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/system/user'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userservice.UserService === "undefined" ? Object : _userservice.UserService
    ])
], UserController);

//# sourceMappingURL=user.controller.js.map