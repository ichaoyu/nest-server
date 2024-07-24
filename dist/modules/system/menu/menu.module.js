"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MenuModule", {
    enumerable: true,
    get: function() {
        return MenuModule;
    }
});
const _common = require("@nestjs/common");
const _menucontroller = require("./menu.controller");
const _menuservice = require("./menu.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let MenuModule = class MenuModule {
};
MenuModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _menucontroller.MenuController
        ],
        providers: [
            _menuservice.MenuService
        ]
    })
], MenuModule);

//# sourceMappingURL=menu.module.js.map