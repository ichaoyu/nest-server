"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BasicAuthController", {
    enumerable: true,
    get: function() {
        return BasicAuthController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../constants");
const _interfaces = require("../../interfaces");
const _utils = require("../../utils");
const _basicauthdto = require("./basic-auth.dto");
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
let BasicAuthController = class BasicAuthController {
    index() {
        return {};
    }
    async login(dto, res) {
        const newVal = `${dto.userName}:${dto.password}`;
        if (newVal === _constants.EXTRAS.BASIC_AUTH_RAW) {
            const newHash = await _utils.HashUtil.crypto(newVal);
            res.status(_common.HttpStatus.OK);
            res.setCookie(_constants.EXTRAS.BASIC_AUTH_KEY, newHash, {
                path: '/',
                httpOnly: true,
                maxAge: 2 * 24 * 60 * 60
            });
            return {};
        }
        res.status(_common.HttpStatus.BAD_REQUEST);
    }
};
_ts_decorate([
    (0, _common.Get)('/'),
    (0, _common.Render)('basic-auth'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], BasicAuthController.prototype, "index", null);
_ts_decorate([
    (0, _common.Post)('/login'),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Res)({
        passthrough: true
    })),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _basicauthdto.BasicAuthLoginDTO === "undefined" ? Object : _basicauthdto.BasicAuthLoginDTO,
        typeof _interfaces.IResponse === "undefined" ? Object : _interfaces.IResponse
    ]),
    _ts_metadata("design:returntype", Promise)
], BasicAuthController.prototype, "login", null);
BasicAuthController = _ts_decorate([
    (0, _swagger.ApiExcludeController)(),
    (0, _common.Controller)(_constants.EXTRAS.BASIC_AUTH_PATH)
], BasicAuthController);

//# sourceMappingURL=basic-auth.controller.js.map