"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SharedService", {
    enumerable: true,
    get: function() {
        return SharedService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _websockets = require("@nestjs/websockets");
const _typeorm1 = require("typeorm");
const _constants = require("../constants");
const _database = require("../database");
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
let SharedService = class SharedService {
    /**
   * 保存登录日志
   * @param {SysLoginLogEntity} data 登录日志数据
   */ async setLoginLog(data) {
        await this.loginLogModel.insert(data);
    }
    /**
   * 保存操作日志
   * @param {SysOperLogEntity} data 操作日志数据
   */ async setOperLog(data) {
        await this.operLogModel.insert(data);
    }
    /**
   * 单客户端登录判断
   */ async isSoloLogin() {
        const config = await this.configModel.findOneBy({
            configKey: 'sys.base.soloLogin'
        });
        return config.configValue === '0';
    }
    /**
   * 获取用户部门
   * @param {string} userName 用户名
   */ async getUserWithDeptByName(userName) {
        return await this.userModel.findOne({
            relations: {
                dept: true
            },
            where: {
                userName
            }
        });
    }
    /**
   * 从 JWT 载荷获取用户带部门和角色
   * @param {IPayload} payload JWT 载荷
   * @param {IPlatform} platform 平台
   */ async getUserWithDeptRolesByPayload(payload, platform = 'http') {
        const user = await this.userModel.findOne({
            relations: {
                dept: true,
                roles: {
                    menus: true
                }
            },
            where: {
                id: payload.userId,
                userName: payload.userName
            }
        });
        if (!user) {
            throw platform === 'http' ? new _common.UnauthorizedException(_constants.MESSAGES.AUTHORIZATION_NOT_VALID) : new _websockets.WsException({
                status: _common.HttpStatus.UNAUTHORIZED,
                message: _constants.MESSAGES.AUTHORIZATION_NOT_VALID
            });
        }
        return user;
    }
    /**
   * 获取用户带权限
   * @param {SysUserEntity} data 用户
   */ getUserWithPermission(data) {
        const { roles, ...rest } = data;
        const user = {
            permissions: [],
            user: rest
        };
        if (roles?.length) {
            if (rest.id === '1') {
                // 主账号拥有全部权限
                user.permissions = [
                    _constants.EXTRAS.ADMIN_PERMISSION
                ];
            } else {
                const permissions = new Set();
                for (const role of roles){
                    if (role.menus?.length) {
                        for (const menu of role.menus){
                            permissions.add(menu.perms);
                        }
                    }
                }
                user.permissions = Array.from(permissions);
            }
        }
        return {
            ...user,
            roles
        };
    }
    constructor(userModel, loginLogModel, operLogModel, configModel){
        this.userModel = userModel;
        this.loginLogModel = loginLogModel;
        this.operLogModel = operLogModel;
        this.configModel = configModel;
    }
};
SharedService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_database.SysUserEntity)),
    _ts_param(1, (0, _typeorm.InjectRepository)(_database.SysLoginLogEntity)),
    _ts_param(2, (0, _typeorm.InjectRepository)(_database.SysOperLogEntity)),
    _ts_param(3, (0, _typeorm.InjectRepository)(_database.SysConfigEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository,
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], SharedService);

//# sourceMappingURL=shared.service.js.map