"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IndexModule", {
    enumerable: true,
    get: function() {
        return IndexModule;
    }
});
const _common = require("@nestjs/common");
const _auth = require("./auth");
const _basicauth = require("./basic-auth");
const _currentuser = require("./current-user");
const _monitor = require("./monitor");
const _system = require("./system");
const _website = require("./website");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let IndexModule = class IndexModule {
};
IndexModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _auth.AuthModule,
            _basicauth.BasicAuthModule,
            _currentuser.CurrentUserModule,
            _monitor.MonitorModule,
            _system.SystemModule,
            _website.WebSiteModule
        ]
    })
], IndexModule);

//# sourceMappingURL=index.module.js.map