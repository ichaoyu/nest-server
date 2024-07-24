"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ContextService", {
    enumerable: true,
    get: function() {
        return ContextService;
    }
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _interfaces = require("../interfaces");
const _sharedservice = require("./shared.service");
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
let ContextService = class ContextService {
    /**
   * 获取 IP
   */ getIP() {
        return this.request.ip;
    }
    /**
   * 获取 UA
   */ getUA() {
        return this.request.headers['user-agent'];
    }
    /**
   * 在请求上下文设置载荷
   * @param {IPayload} payload 载荷
   */ setPayload(payload) {
        this.request.payload = payload;
    }
    /**
   * 在请求上下文获取载荷
   */ getPayload() {
        return this.request.payload;
    }
    /**
   * 在请求上下文设置用户
   * @param {IPayload} payload JWT 载荷
   */ async setUser(payload) {
        const user = await this.sharedService.getUserWithDeptRolesByPayload(payload);
        this.request.user = user;
    }
    /**
   * 从请求上下文获取用户
   */ getUser() {
        return this.request.user;
    }
    /**
   * 从请求上下文获取用户带权限
   */ getUserWithPermission() {
        const user = this.getUser();
        return this.sharedService.getUserWithPermission(user);
    }
    constructor(request, sharedService){
        this.request = request;
        this.sharedService = sharedService;
    }
};
ContextService = _ts_decorate([
    (0, _common.Injectable)({
        scope: _common.Scope.REQUEST
    }),
    _ts_param(0, (0, _common.Inject)(_core.REQUEST)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _interfaces.IRequest === "undefined" ? Object : _interfaces.IRequest,
        typeof _sharedservice.SharedService === "undefined" ? Object : _sharedservice.SharedService
    ])
], ContextService);

//# sourceMappingURL=context.service.js.map