"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostController", {
    enumerable: true,
    get: function() {
        return PostController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../../constants");
const _decorators = require("../../../decorators");
const _models = require("../../../models");
const _postdto = require("./post.dto");
const _postservice = require("./post.service");
const _postvo = require("./post.vo");
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
let PostController = class PostController {
    async findPage(dto) {
        return await this.postService.handleFindPage(dto);
    }
    async create(dto) {
        return await this.postService.handleCreate(dto);
    }
    async updatePost(id, dto) {
        await this.postService.handleUpdate(id, dto);
    }
    async deleteMany(dto) {
        await this.postService.handleDeleteMany(dto);
    }
    async exportPage(dto) {
        return await this.postService.handleExportPage(dto);
    }
    constructor(postService){
        this.postService = postService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '查询岗位分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _postvo.FindPostPageVO
    }),
    (0, _decorators.Permission)('system:post:list'),
    (0, _common.Post)('/page'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _postdto.FindPostPageDTO === "undefined" ? Object : _postdto.FindPostPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "findPage", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '新增岗位'
    }),
    (0, _decorators.OperLog)({
        title: '岗位管理',
        bizType: _constants.ENTITY_BIZ_TYPE.INSERT
    }),
    (0, _decorators.Permission)('system:post:add'),
    (0, _common.Post)('/create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _postdto.CreatePostDTO === "undefined" ? Object : _postdto.CreatePostDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新岗位'
    }),
    (0, _swagger.ApiQuery)({
        name: 'id',
        description: '主键'
    }),
    (0, _decorators.OperLog)({
        title: '岗位管理',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _decorators.Permission)('system:post:edit'),
    (0, _common.Put)('/update'),
    _ts_param(0, (0, _common.Query)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _postdto.UpdatePostDTO === "undefined" ? Object : _postdto.UpdatePostDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "updatePost", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '删除岗位'
    }),
    (0, _decorators.OperLog)({
        title: '岗位管理',
        bizType: _constants.ENTITY_BIZ_TYPE.DELETE
    }),
    (0, _decorators.Permission)('system:post:remove'),
    (0, _common.Delete)('/delete'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _models.DelDTO === "undefined" ? Object : _models.DelDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "deleteMany", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '导出岗位分页'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _models.ExportResultVO
    }),
    (0, _decorators.OperLog)({
        title: '岗位管理',
        bizType: _constants.ENTITY_BIZ_TYPE.EXPORT
    }),
    (0, _decorators.Permission)('system:post:export'),
    (0, _common.Post)('/export'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _postdto.FindPostPageDTO === "undefined" ? Object : _postdto.FindPostPageDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], PostController.prototype, "exportPage", null);
PostController = _ts_decorate([
    (0, _swagger.ApiTags)('岗位接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/system/post'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _postservice.PostService === "undefined" ? Object : _postservice.PostService
    ])
], PostController);

//# sourceMappingURL=post.controller.js.map