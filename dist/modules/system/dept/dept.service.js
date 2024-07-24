"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeptService", {
    enumerable: true,
    get: function() {
        return DeptService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _constants = require("../../../constants");
const _database = require("../../../database");
const _shared = require("../../../shared");
const _utils = require("../../../utils");
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
let DeptService = class DeptService {
    async handleFindList(dto) {
        const { ...where } = dto;
        return await this.deptModel.find({
            where: {
                delFlag: _constants.ENTITY_DEL_FLAG.EXIST,
                ...where
            },
            order: {
                orderNum: 'ASC'
            }
        });
    }
    async handleGetTree() {
        const data = await this.deptModel.find({
            where: {
                delFlag: _constants.ENTITY_DEL_FLAG.EXIST,
                status: _constants.ENTITY_STATUS.NORMAL
            }
        });
        return _utils.TransformUtil.listToTree(data, {
            title: 'deptName',
            key: 'id',
            parentKey: 'parentId'
        });
    }
    async handleCreate(dto) {
        const { parentId } = dto;
        const { userName } = this.contextService.getPayload();
        const parentDept = await this.deptModel.findOneBy({
            id: parentId
        });
        if (!parentDept) {
            throw new _common.BadRequestException(_constants.MESSAGES.PARENT_DEPT_NOT_EXIST);
        }
        await this.deptModel.insert({
            ...dto,
            ancestors: `${parentDept.ancestors},${parentDept.id}`,
            createBy: userName
        });
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        const list = await this.deptModel.find({
            relations: {
                roles: true
            },
            where: {
                id: (0, _typeorm1.In)(ids)
            }
        });
        for (const dept of list){
            await this.deptModel.update(dept.id, {
                delFlag: _constants.ENTITY_DEL_FLAG.DELETE,
                roles: []
            });
        }
    }
    async handleUpdate(id, dto) {
        const { parentId } = dto;
        const { userName } = this.contextService.getPayload();
        const [dept, parentDept] = await Promise.all([
            this.deptModel.findOneBy({
                id
            }),
            this.deptModel.findOneBy({
                id: parentId
            })
        ]);
        if (!dept) {
            throw new _common.BadRequestException(_constants.MESSAGES.DEPT_NOT_EXIST);
        }
        if (!parentDept) {
            throw new _common.BadRequestException(_constants.MESSAGES.PARENT_DEPT_NOT_EXIST);
        }
        await this.deptModel.update(id, {
            ...dto,
            ancestors: dept.parentId !== parentId ? `${parentDept.ancestors},${parentDept.id}` : dept.ancestors,
            updateBy: userName
        });
    }
    constructor(deptModel, contextService){
        this.deptModel = deptModel;
        this.contextService = contextService;
    }
};
DeptService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_database.SysDeptEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService
    ])
], DeptService);

//# sourceMappingURL=dept.service.js.map