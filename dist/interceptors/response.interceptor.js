"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ResponseInterceptor", {
    enumerable: true,
    get: function() {
        return ResponseInterceptor;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _rxjs = require("rxjs");
const _constants = require("../constants");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let ResponseInterceptor = class ResponseInterceptor {
    async intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const apiPath = this.configService.get('app.apiPath');
        const isApi = request.url.includes(apiPath);
        if (!isApi) {
            return next.handle();
        }
        return next.handle().pipe((0, _rxjs.map)((data)=>({
                timestamp: Date.now(),
                code: _common.HttpStatus.OK,
                msg: _constants.MESSAGES.REQUEST_OK,
                data
            })));
    }
    constructor(configService){
        this.configService = configService;
    }
};
ResponseInterceptor = _ts_decorate([
    (0, _common.Injectable)({
        scope: _common.Scope.REQUEST
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], ResponseInterceptor);

//# sourceMappingURL=response.interceptor.js.map