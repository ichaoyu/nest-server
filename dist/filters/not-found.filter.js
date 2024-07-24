"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotFoundFilter", {
    enumerable: true,
    get: function() {
        return NotFoundFilter;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
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
let NotFoundFilter = class NotFoundFilter {
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const apiPath = this.configService.get('app.apiPath');
        const ctx = host.switchToHttp();
        const code = exception.getStatus();
        const req = ctx.getRequest();
        const isApi = req.url.includes(apiPath);
        if (isApi) {
            this.loggerService.error(exception.stack);
            const msg = `${_constants.MESSAGES.NOT_FOUND}: ${exception.message}`;
            httpAdapter.reply(ctx.getResponse(), {
                code,
                msg
            }, code);
        }
    }
    constructor(loggerService, configService, httpAdapterHost){
        this.loggerService = loggerService;
        this.configService = configService;
        this.httpAdapterHost = httpAdapterHost;
    }
};
NotFoundFilter = _ts_decorate([
    (0, _common.Catch)(_common.NotFoundException),
    _ts_param(0, (0, _nestjspino.InjectPinoLogger)(NotFoundFilter.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjspino.PinoLogger === "undefined" ? Object : _nestjspino.PinoLogger,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService,
        typeof _core.HttpAdapterHost === "undefined" ? Object : _core.HttpAdapterHost
    ])
], NotFoundFilter);

//# sourceMappingURL=not-found.filter.js.map