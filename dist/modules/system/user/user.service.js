"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: function() {
        return UserService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _excel = require("../../../shared/excel");
const _typeorm1 = require("typeorm");
const _constants = require("../../../constants");
const _database = require("../../../database");
const _shared = require("../../../shared");
const _utils = require("../../../utils");
const _userserialize = require("./user.serialize");
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
let UserService = class UserService {
    async handleFindPage(dto) {
        const { pageNum, pageSize, beginDate, endDate, deptId, ...where } = dto;
        const conditions = {
            delFlag: _constants.ENTITY_DEL_FLAG.EXIST,
            createTime: beginDate ? (0, _typeorm1.Between)(beginDate, endDate) : null,
            ...where
        };
        const [list, total] = await this.userModel.findAndCount({
            relations: {
                dept: true
            },
            where: deptId && deptId !== '100' ? [
                {
                    ...conditions,
                    dept: {
                        id: deptId
                    }
                },
                {
                    ...conditions,
                    dept: {
                        ancestors: (0, _typeorm1.Like)(`%,${deptId}%`)
                    }
                }
            ] : {
                ...conditions
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
    async handleCreate(dto) {
        const { userName } = this.contextService.getPayload();
        const { postIds, roleIds, ...rest } = dto;
        const existUser = await this.userModel.findOneBy({
            userName: dto.userName
        });
        if (existUser) {
            throw new _common.BadRequestException(_constants.MESSAGES.USER_EXIST);
        }
        const password = await _utils.HashUtil.crypto(dto.password);
        const posts = postIds && postIds.length > 0 ? await this.postModel.findBy({
            id: (0, _typeorm1.In)(postIds)
        }) : null;
        const roles = roleIds && roleIds.length > 0 ? await this.roleModel.findBy({
            id: (0, _typeorm1.In)(roleIds)
        }) : null;
        await this.userModel.insert({
            ...rest,
            posts,
            roles,
            password,
            createBy: userName
        });
    }
    async handleUpdate(id, dto) {
        const { userName } = this.contextService.getPayload();
        const { postIds, roleIds, ...rest } = dto;
        const existUser = await this.userModel.findOne({
            relations: {
                posts: true,
                roles: true
            },
            where: {
                id: id
            }
        });
        if (!existUser) {
            throw new _common.BadRequestException(_constants.MESSAGES.USER_NOT_EXIST);
        }
        const posts = postIds?.length ? await this.postModel.findBy({
            id: (0, _typeorm1.In)(postIds)
        }) : null;
        const roles = roleIds?.length ? await this.roleModel.findBy({
            id: (0, _typeorm1.In)(roleIds)
        }) : null;
        const newUser = this.userModel.merge(existUser, {
            ...rest,
            posts,
            roles,
            updateBy: userName
        });
        await this.userModel.save(newUser);
    // await this.userModel.update(id, {
    //   ...rest,
    //   posts,
    //   roles,
    //   updateBy: userName
    // })
    }
    async handleGetFormData(id) {
        const posts = await this.postModel.findBy({
            status: _constants.ENTITY_STATUS.NORMAL
        });
        const roles = await this.roleModel.findBy({
            delFlag: _constants.ENTITY_DEL_FLAG.EXIST,
            id: (0, _typeorm1.Not)('1')
        });
        const data = {
            posts,
            roles
        };
        if (id) {
            const user = await this.userModel.findOne({
                relations: {
                    posts: true,
                    roles: true
                },
                where: {
                    id: id
                }
            });
            data.postIds = user.posts.map((v)=>v.id);
            data.roleIds = user.roles.map((v)=>v.id);
        }
        return data;
    }
    async handleDeleteMany(dto) {
        const { ids } = dto;
        const list = await this.userModel.findBy({
            id: (0, _typeorm1.In)(ids)
        });
        for (const user of list){
            // await this.userModel.update(user.id, {
            //   delFlag: ENTITY_DEL_FLAG.DELETE,
            //   posts: [],
            //   roles: []
            // })
            await this.userModel.save(this.userModel.merge(user, {
                delFlag: _constants.ENTITY_DEL_FLAG.DELETE,
                posts: [],
                roles: []
            }));
        }
    }
    async handleImportTemplate(file) {
        const data = await this.excelService.handleImport({
            sheetName: '用户',
            filePath: file.filepath,
            Cls: _userserialize.UserTemplateSerialize
        });
        let success = 0;
        let fail = 0;
        for (const item of data){
            const isExist = await this.checkIsExist(item.userName);
            if (isExist) {
                fail++;
            } else {
                await this.handleCreate({
                    roleIds: [],
                    postIds: [],
                    ...item
                });
                success++;
            }
        }
        return {
            success,
            fail
        };
    }
    async handleExportTemplate() {
        return await this.excelService.handleCreate({
            sheetName: '用户',
            fileName: '用户模板',
            Cls: _userserialize.UserTemplateSerialize
        });
    }
    async handleExportPage(dto) {
        const { list } = await this.handleFindPage(dto);
        return await this.excelService.handleExport({
            sheetName: '用户',
            fileName: '用户报表',
            Cls: _userserialize.UserExportSerialize,
            data: list
        });
    }
    async handleResetPassword(id, dto) {
        const existUser = await this.userModel.findOneBy({
            id
        });
        if (!existUser) {
            throw new _common.BadRequestException(_constants.MESSAGES.USER_NOT_EXIST);
        }
        const { userName } = this.contextService.getPayload();
        const password = await _utils.HashUtil.crypto(dto.password);
        await this.userModel.update(id, {
            password,
            updateBy: userName
        });
    }
    async handleToggleStatus(id) {
        const { userName } = this.contextService.getPayload();
        const existUser = await this.userModel.findOneBy({
            id
        });
        if (!existUser) {
            throw new _common.BadRequestException(_constants.MESSAGES.USER_NOT_EXIST);
        }
        await this.userModel.update(id, {
            status: existUser.status === _constants.ENTITY_STATUS.NORMAL ? _constants.ENTITY_STATUS.DISABLE : _constants.ENTITY_STATUS.NORMAL,
            updateBy: userName
        });
    }
    async checkIsExist(userName) {
        return await this.userModel.findOneBy({
            userName
        });
    }
    constructor(excelService, postModel, roleModel, userModel, contextService){
        this.excelService = excelService;
        this.postModel = postModel;
        this.roleModel = roleModel;
        this.userModel = userModel;
        this.contextService = contextService;
    }
};
UserService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_excel.EXCEL_SERVICE)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysPostEntity)),
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
], UserService);

//# sourceMappingURL=user.service.js.map