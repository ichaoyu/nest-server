"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SharedModule", {
    enumerable: true,
    get: function() {
        return SharedModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _database = require("../database");
const _contextservice = require("./context.service");
const _sharedservice = require("./shared.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let SharedModule = class SharedModule {
};
SharedModule = _ts_decorate([
    (0, _common.Global)(),
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _database.SysConfigEntity,
                _database.SysDeptEntity,
                _database.SysDictDataEntity,
                _database.SysDictTypeEntity,
                _database.SysLoginLogEntity,
                _database.SysMenuEntity,
                _database.SysPostEntity,
                _database.SysRoleEntity,
                _database.SysUserEntity,
                _database.SysOperLogEntity
            ])
        ],
        providers: [
            _contextservice.ContextService,
            _sharedservice.SharedService
        ],
        exports: [
            _contextservice.ContextService,
            _sharedservice.SharedService,
            _typeorm.TypeOrmModule
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map