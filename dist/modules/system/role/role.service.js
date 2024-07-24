"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoleService", {
    enumerable: true,
    get: function() {
        return RoleService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _excel = require("../../../shared/excel");
const _typeorm1 = require("typeorm");
const _constants = require("../../../constants");
const _database = require("../../../database");
const _shared = require("../../../shared");
const _roleserialize = require("./role.serialize");
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
let RoleService = class RoleService {
    async handleFindPage(dto) {
        const { pageNum, pageSize, beginDate, endDate, ...where } = dto;
        const [list, total] = await this.roleModel.findAndCount({
            relations: {
                menus: true
            },
            select: {
                menus: {
                    id: true
                }
            },
            where: {
                delFlag: _constants.ENTITY_DEL_FLAG.EXIST,
                createTime: beginDate ? (0, _typeorm1.Between)(beginDate, endDate) : null,
                ...where
            },
            order: {
                roleSort: 'ASC'
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
    async handleFindAllocatedPage(id, dto) {
        const { pageNum, pageSize, ...where } = dto;
        const [list, total] = await this.userModel.findAndCount({
            relations: {
                roles: true
            },
            where: {
                roles: {
                    id: id
                },
                ...where
            },
            skip: (pageNum - 1) * pageSize,
            take: pageSize
        });
        return {
            pageNum,
            pageSize,
            total,
            list
        };
    }
    async handleCancelAllocated(id, dto) {
        const { ids: userIds } = dto;
        const role = await this.roleModel.findOne({
            relations: {
                users: true
            },
            where: {
                id
            }
        });
        const users = role.users.filter((v)=>!userIds.includes(v.id));
        await this.roleModel.update(id, {
            users
        });
    }
    async handleCreate(dto) {
        const { userName } = this.contextService.getPayload();
        const { menus, ...rest } = dto;
        const roleMenus = menus.length > 0 ? await this.menuModel.find({
            select: {
                id: true
            },
            where: menus.map((v)=>({
                    id: v
                }))
        }) : null;
        await this.roleModel.insert({
            ...rest,
            menus: roleMenus,
            createBy: userName
        });
    }
    async handleUpdate(id, dto) {
        const { userName } = this.contextService.getPayload();
        const role = await this.roleModel.findOne({
            relations: {
                menus: true
            },
            where: {
                id: id
            }
        });
        if (!role) {
            throw new _common.BadRequestException(_constants.MESSAGES.ROLE_NOT_EXIST);
        }
        const { menus, ...rest } = dto;
        const roleMenus = menus.length > 0 ? await this.menuModel.find({
            select: {
                id: true
            },
            where: menus.map((v)=>({
                    id: v
                }))
        }) : null;
        await this.roleModel.save({
            ...role,
            ...rest,
            menus: roleMenus,
            updateBy: userName
        });
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        const list = await this.roleModel.find({
            relations: {
                menus: true
            },
            where: {
                id: (0, _typeorm1.In)(ids)
            }
        });
        for (const role of list){
            await this.roleModel.update(role.id, {
                delFlag: _constants.ENTITY_DEL_FLAG.DELETE,
                menus: []
            });
        }
    }
    async handleExportPage(dto) {
        const { list } = await this.handleFindPage(dto);
        return await this.excelService.handleExport({
            sheetName: '角色',
            fileName: '角色报表',
            Cls: _roleserialize.RoleExportSerialize,
            data: list
        });
    }
    async handleToggleStatus(id) {
        const role = await this.roleModel.findOneBy({
            id
        });
        if (!role) {
            throw new _common.BadRequestException(_constants.MESSAGES.ROLE_NOT_EXIST);
        }
        role.status = role.status === _constants.ENTITY_STATUS.NORMAL ? _constants.ENTITY_STATUS.DISABLE : _constants.ENTITY_STATUS.NORMAL;
        await this.roleModel.save(role);
    }
    async handleFindUnallocatedPage(id, dto) {
        const { pageNum, pageSize, ...where } = dto;
        const allocatedUsers = await this.userModel.find({
            where: {
                roles: {
                    id: id
                }
            },
            select: {
                id: true
            }
        });
        const allocatedUserIds = allocatedUsers.map((v)=>v.id);
        const [list, total] = await this.userModel.findAndCount({
            where: {
                id: (0, _typeorm1.Not)((0, _typeorm1.In)(allocatedUserIds)),
                ...where
            },
            skip: (pageNum - 1) * pageSize,
            take: pageSize
        });
        return {
            pageNum,
            pageSize,
            total,
            list
        };
    }
    async handleAllocate(id, dto) {
        const { ids } = dto;
        const role = await this.roleModel.findOne({
            relations: {
                users: true
            },
            where: {
                id
            }
        });
        const oldUsers = role.users || [];
        const oldUserIds = oldUsers.map((v)=>v.id);
        const newUserIds = ids.filter((v)=>!oldUserIds.includes(v));
        const newUsers = await this.userModel.findBy({
            id: (0, _typeorm1.In)(newUserIds)
        });
        const users = [].concat(oldUsers, newUsers);
        await this.roleModel.update(id, {
            users
        });
    }
    constructor(excelService, menuModel, roleModel, userModel, contextService){
        this.excelService = excelService;
        this.menuModel = menuModel;
        this.roleModel = roleModel;
        this.userModel = userModel;
        this.contextService = contextService;
    }
};
RoleService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_excel.EXCEL_SERVICE)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysMenuEntity)),
    _ts_param(2, (0, _typeorm.InjectRepository)(_database.SysRoleEntity)),
    _ts_param(3, (0, _typeorm.InjectRepository)(_database.SysUserEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _excel.ExcelService === "undefined" ? Object : _excel.ExcelService,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService
    ])
], RoleService);

//# sourceMappingURL=role.service.js.map