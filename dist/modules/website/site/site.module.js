"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SiteModule", {
    enumerable: true,
    get: function() {
        return SiteModule;
    }
});
const _common = require("@nestjs/common");
const _database = require("../../../database");
const _typeorm = require("@nestjs/typeorm");
const _sitecontroller = require("./site.controller");
const _siteservice = require("./site.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let SiteModule = class SiteModule {
};
SiteModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _sitecontroller.SiteController
        ],
        providers: [
            _siteservice.SiteService
        ],
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _database.WebSiteInfoEntity
            ])
        ],
        exports: [
            _typeorm.TypeOrmModule
        ]
    })
], SiteModule);

//# sourceMappingURL=site.module.js.map