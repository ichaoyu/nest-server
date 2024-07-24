"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SystemModule", {
    enumerable: true,
    get: function() {
        return SystemModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("./config");
const _dept = require("./dept");
const _dict = require("./dict");
const _menu = require("./menu");
const _post = require("./post");
const _role = require("./role");
const _user = require("./user");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let SystemModule = class SystemModule {
};
SystemModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _config.ConfigModule,
            _dept.DeptModule,
            _dict.DictModule,
            _menu.MenuModule,
            _post.PostModule,
            _role.RoleModule,
            _user.UserModule
        ]
    })
], SystemModule);

//# sourceMappingURL=system.module.js.map