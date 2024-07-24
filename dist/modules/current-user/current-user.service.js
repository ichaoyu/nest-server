"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CurrentUserService", {
    enumerable: true,
    get: function() {
        return CurrentUserService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _constants = require("../../constants");
const _database = require("../../database");
const _shared = require("../../shared");
const _utils = require("../../utils");
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
let CurrentUserService = class CurrentUserService {
    async handleGetInfo() {
        const { roles, permissions, user } = this.contextService.getUserWithPermission();
        const result = {
            // menus: [] as IUserMenu[],
            roles: [],
            permissions,
            user
        };
        if (roles?.length) {
            result.roles = roles.map((v)=>v.roleKey);
        // if (user.id === "1") {
        //   const menus = await this.menuModel.find();
        //   result.menus = await this.transformMenus(menus);
        // } else {
        //   const menus = new Map();
        //   for (const role of roles) {
        //     if (role.menus?.length) {
        //       for (const menu of role.menus) {
        //         menus.set(menu.id, menu);
        //       }
        //     }
        //   }
        //   result.menus = await this.transformMenus(Object.values(menus));
        // }
        }
        return result;
    }
    async handleGetProfile() {
        const { userName } = this.contextService.getPayload();
        const { roles, dept, posts, ...rest } = await this.userModel.findOne({
            relations: {
                roles: true,
                dept: true,
                posts: true
            },
            where: {
                userName
            }
        });
        const result = {
            ...rest,
            postGroup: posts.map((v)=>v.postName).join(","),
            roleGroup: roles.map((v)=>v.roleName).join(","),
            deptName: dept.deptName
        };
        return result;
    }
    async handleUpdateBase(dto) {
        const { userId, userName } = this.contextService.getPayload();
        await this.userModel.update(userId, {
            ...dto,
            updateBy: userName
        });
    }
    async handleUpdatePassword(dto) {
        const { userName } = this.contextService.getPayload();
        const user = await this.userModel.createQueryBuilder("user").select("user").addSelect("user.password").where({
            userName
        }).getOne();
        const isMatch = await _utils.HashUtil.compare(dto.oldPassword, user.password);
        if (!isMatch) {
            throw new _common.BadRequestException(_constants.MESSAGES.PASSWORD_NOT_EQUAL);
        }
        const password = await _utils.HashUtil.crypto(dto.newPassword);
        await this.userModel.update(user.id, {
            password,
            updateBy: userName
        });
    }
    /**
   * 根据菜单列表生成用户菜单
   * @param {SysMenuEntity[]} menus 菜单列表
   */ async transformMenus(menus) {
        // 过滤按钮权限
        const filteredMenus = menus.filter((v)=>v.menuType !== "F");
        const data = new Set();
        for (const menu of filteredMenus){
            let alwaysShow = false;
            let children = null;
            let path = menu.path;
            let redirect = menu.redirect;
            let component = "";
            let componentName = "";
            const childMenus = filteredMenus.filter((v)=>v.parentId === menu.id);
            // 有子菜单时设置总是显示
            if (childMenus.length > 0) {
                alwaysShow = true;
                children = [];
            }
            // 父路由必须以 `/` 开始
            if (menu.parentId === "0" && !path.startsWith("/")) {
                path = `/${path}`;
            }
            // 重定向必须以 `/` 开始
            if (redirect && !redirect.startsWith("/")) {
                redirect = `/${redirect}`;
            }
            if (menu.component) {
                component = menu.component;
                componentName = _utils.ProxyUtil.case.pascalCase(menu.component);
            } else if (menu.parentId === "0") {
                component = "DefaultLayout";
            } else {
                component = "ParentLayout";
            }
            data.add({
                key: menu.id,
                parentKey: menu.parentId,
                path,
                name: "",
                redirect,
                component,
                componentName,
                meta: {
                    title: menu.menuName,
                    icon: menu.icon,
                    sort: menu.orderNum,
                    hidden: menu.visible === "1",
                    noCache: menu.isCache === "1",
                    alwaysShow
                },
                children
            });
        }
        return Array.from(data);
    }
    constructor(userModel, menuModel, contextService){
        this.userModel = userModel;
        this.menuModel = menuModel;
        this.contextService = contextService;
    }
};
CurrentUserService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_database.SysUserEntity)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysMenuEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _shared.ContextService === "undefined" ? Object : _shared.ContextService
    ])
], CurrentUserService);

//# sourceMappingURL=current-user.service.js.map