"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ConfigModule", {
    enumerable: true,
    get: function() {
        return ConfigModule;
    }
});
const _common = require("@nestjs/common");
const _configcontroller = require("./config.controller");
const _configservice = require("./config.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ConfigModule = class ConfigModule {
};
ConfigModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _configcontroller.ConfigController
        ],
        providers: [
            _configservice.ConfigService
        ]
    })
], ConfigModule);

//# sourceMappingURL=config.module.js.map