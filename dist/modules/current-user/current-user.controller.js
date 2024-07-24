"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CurrentUserController", {
    enumerable: true,
    get: function() {
        return CurrentUserController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _constants = require("../../constants");
const _decorators = require("../../decorators");
const _currentuserdto = require("./current-user.dto");
const _currentuserservice = require("./current-user.service");
const _currentuservo = require("./current-user.vo");
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
let CurrentUserController = class CurrentUserController {
    async getInfo() {
        return await this.currentService.handleGetInfo();
    }
    async getProfile() {
        return await this.currentService.handleGetProfile();
    }
    async updateBase(dto) {
        await this.currentService.handleUpdateBase(dto);
    }
    async updatePassword(dto) {
        await this.currentService.handleUpdatePassword(dto);
    }
    constructor(currentService){
        this.currentService = currentService;
    }
};
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取用户信息'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _currentuservo.GetCurrentUserInfoVO
    }),
    (0, _common.Get)('/getInfo'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], CurrentUserController.prototype, "getInfo", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '获取用户配置'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _currentuservo.GetCurrentUserProfileVO
    }),
    (0, _common.Get)('/getProfile'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], CurrentUserController.prototype, "getProfile", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新用户基本信息'
    }),
    (0, _decorators.OperLog)({
        title: '当前用户',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _common.Put)('/updateBase'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _currentuserdto.UpdateCurrentUserBaseDTO === "undefined" ? Object : _currentuserdto.UpdateCurrentUserBaseDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], CurrentUserController.prototype, "updateBase", null);
_ts_decorate([
    (0, _swagger.ApiOperation)({
        summary: '更新用户密码'
    }),
    (0, _decorators.OperLog)({
        title: '当前用户',
        bizType: _constants.ENTITY_BIZ_TYPE.UPDATE
    }),
    (0, _common.Put)('/updatePassword'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _currentuserdto.UpdateCurrentUserPasswordDTO === "undefined" ? Object : _currentuserdto.UpdateCurrentUserPasswordDTO
    ]),
    _ts_metadata("design:returntype", Promise)
], CurrentUserController.prototype, "updatePassword", null);
CurrentUserController = _ts_decorate([
    (0, _swagger.ApiTags)('当前用户接口'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.Controller)('/current-user'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _currentuserservice.CurrentUserService === "undefined" ? Object : _currentuserservice.CurrentUserService
    ])
], CurrentUserController);

//# sourceMappingURL=current-user.controller.js.map