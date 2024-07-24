"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DefaultFilter", {
    enumerable: true,
    get: function() {
        return DefaultFilter;
    }
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _nestjspino = require("nestjs-pino");
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
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let DefaultFilter = class DefaultFilter {
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const code = exception instanceof _common.HttpException ? exception.getStatus() : _common.HttpStatus.INTERNAL_SERVER_ERROR;
        const msg = exception instanceof _common.HttpException ? exception.message : _constants.MESSAGES.INTERNAL_SERVER_ERROR;
        // @ts-ignore
        this.loggerService.error(exception.stack);
        // // statusCode统一返回200，具体错误处理在返回体里
        httpAdapter.reply(ctx.getResponse(), {
            code,
            msg
        }, code);
    }
    constructor(loggerService, httpAdapterHost){
        this.loggerService = loggerService;
        this.httpAdapterHost = httpAdapterHost;
    }
};
DefaultFilter = _ts_decorate([
    (0, _common.Catch)(),
    _ts_param(0, (0, _nestjspino.InjectPinoLogger)(DefaultFilter.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjspino.PinoLogger === "undefined" ? Object : _nestjspino.PinoLogger,
        typeof _core.HttpAdapterHost === "undefined" ? Object : _core.HttpAdapterHost
    ])
], DefaultFilter);

//# sourceMappingURL=default.filter.js.map