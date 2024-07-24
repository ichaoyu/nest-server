"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WsDefaultFilter", {
    enumerable: true,
    get: function() {
        return WsDefaultFilter;
    }
});
const _common = require("@nestjs/common");
const _websockets = require("@nestjs/websockets");
const _nestjspino = require("nestjs-pino");
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
let WsDefaultFilter = class WsDefaultFilter extends _websockets.BaseWsExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToWs();
        const client = ctx.getClient();
        const error = exception instanceof _websockets.WsException ? exception.getError() : exception;
        const data = error instanceof Error ? {
            status: _common.HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        } : error;
        this.loggerService.error(error);
        client.send(JSON.stringify({
            event: 'error',
            data
        }));
    }
    constructor(loggerService){
        super();
        this.loggerService = loggerService;
    }
};
WsDefaultFilter = _ts_decorate([
    (0, _common.Catch)(),
    _ts_param(0, (0, _nestjspino.InjectPinoLogger)(WsDefaultFilter.name)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjspino.PinoLogger === "undefined" ? Object : _nestjspino.PinoLogger
    ])
], WsDefaultFilter);

//# sourceMappingURL=ws-default.filter.js.map