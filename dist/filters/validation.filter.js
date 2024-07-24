"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ValidationFilter", {
    enumerable: true,
    get: function() {
        return ValidationFilter;
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
let ValidationFilter = class ValidationFilter {
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const code = exception.getStatus();
        this.loggerService.error(exception.stack);
        httpAdapter.reply(ctx.getResponse(), {
            code,
            msg: `${_constants.MESSAGES.UNPROCESSABLE_ENTITY}: ${exception.message}`
        }, code);
    }
    constructor(loggerService, httpAdapterHost){
        this.loggerService = loggerService;
        this.httpAdapterHost = httpAdapterHost;
    }
};
ValidationFilter = _ts_decorate([
    (0, _common.Catch)(_common.UnprocessableEntityException),
    _ts_param(0, (0, _nestjspino.InjectPinoLogger)(ValidationFilter.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjspino.PinoLogger === "undefined" ? Object : _nestjspino.PinoLogger,
        typeof _core.HttpAdapterHost === "undefined" ? Object : _core.HttpAdapterHost
    ])
], ValidationFilter);

//# sourceMappingURL=validation.filter.js.map