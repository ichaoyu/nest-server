"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PostService", {
    enumerable: true,
    get: function() {
        return PostService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _excel = require("../../../shared/excel");
const _typeorm1 = require("typeorm");
const _constants = require("../../../constants");
const _database = require("../../../database");
const _shared = require("../../../shared");
const _postserialize = require("./post.serialize");
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
let PostService = class PostService {
    async handleCreate(dto) {
        const { userName } = this.contextService.getPayload();
        await this.postModel.insert({
            ...dto,
            createBy: userName
        });
    }
    async handleUpdate(id, dto) {
        const { userName } = this.contextService.getPayload();
        const existPost = await this.postModel.findOneBy({
            id
        });
        if (!existPost) {
            throw new _common.BadRequestException(_constants.MESSAGES.POST_NOT_EXIST);
        }
        await this.postModel.update(id, {
            ...dto,
            updateBy: userName
        });
    }
    async handleFindPage(dto) {
        const { pageNum, pageSize, ...rest } = dto;
        const [list, total] = await this.postModel.findAndCount({
            where: {
                ...rest
            },
            order: {
                postSort: 'ASC'
            },
            take: pageSize,
            skip: (pageNum - 1) * pageSize
        });
        return {
            pageNum,
            pageSize,
            total,
            list
        };
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        const list = await this.postModel.find({
            relations: {
                users: true
            },
            where: {
                id: (0, _typeorm1.In)(ids)
            }
        });
        for (const post of list){
            await this.postModel.update(post.id, {
                users: []
            });
        }
        await this.postModel.delete(ids);
    }
    async handleExportPage(dto) {
        const { list } = await this.handleFindPage(dto);
        return await this.excelService.handleExport({
            sheetName: '岗位',
            fileName: '岗位报表',
            Cls: _postserialize.PostExportSerialize,
            data: list
        });
    }
    constructor(excelService, postModel, contextService){
        this.excelService = excelService;
        this.postModel = postModel;
        this.contextService = contextService;
    }
};
PostService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_excel.EXCEL_SERVICE)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysPostEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _excel.ExcelService === "undefined" ? Object : _excel.ExcelService,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService
    ])
], PostService);

//# sourceMappingURL=post.service.js.map