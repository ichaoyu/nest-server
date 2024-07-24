"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeptController", {
    enumerable: true,
    get: function() {
        return DeptController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _models = require("../../../models");
const _deptdto = require("./dept.dto");
const _deptservice = require("./dept.service");
const _deptvo = require("./dept.vo");
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
let DeptController = class DeptController {
    async findList(dto) {
        return await this.deptService.handleFindList(dto);
    }
    async getTree() {
        return await this.deptService.handleGetTree();
    }
    async create(dto) {
        await this.deptService.handleCreate(dto);
    }
    async update(id, dto) {
        await this.deptService.handleUpdate(id, dto);
    }
    async deleteMany(dto) {
        await this.deptService.handleDeleteMany(dto);
    }
    constructor(deptService){
        this.deptService = deptService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询部门列表'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _deptvo.FindDeptListVO
    }),
    (0, _decorators.Permission)('system:dept:list'),
    (0, _common.Post)('/list'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _deptdto.FindDeptListDTO === "undefined" ? Object : _deptdto.FindDeptListDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DeptController.prototype, "findList", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取部门树'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _deptvo.GetDeptTreeVO
    }),
    (0, _decorators.Permission)('system:dept:list'),
    (0, _common.Get)('/tree'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], DeptController.prototype, "getTree", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '新增部门'
    }),
    (0, _decorators.OperLog)({
        title: '部门管理',
        bizType: _constants.ENTITY_BIZ_TYPE.INSERT
    }),
    (0, _decorators.Permission)('system:dept:add'),
    (0, _common.Post)('/create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _deptdto.CreateDeptDTO === "undefined" ? Object : _deptdto.CreateDeptDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DeptController.prototype, "create", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新部门'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '部门管理',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:dept:edit'),
    (0, _common.Put)('/update'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _deptdto.UpdateDeptDTO === "undefined" ? Object : _deptdto.UpdateDeptDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DeptController.prototype, "update", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除部门'
    }),
    (0, _decorators.OperLog)({
        title: '部门管理',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('system:dept:remove'),
    (0, _common.Delete)('/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], DeptController.prototype, "deleteMany", null);
DeptController = _ts_decorate([
    (0, _swagger.ApiTags)('部门接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/system/dept'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _deptservice.DeptService === "undefined" ? Object : _deptservice.DeptService
    ])
], DeptController);

//# sourceMappingURL=dept.controller.js.map