"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EventsGateway", {
    enumerable: true,
    get: function() {
        return EventsGateway;
    }
});
const _common = require("@nestjs/common");
const _websockets = require("@nestjs/websockets");
const _rxjs = require("rxjs");
const _ws = require("ws");
const _constants = require("../constants");
const _decorators = require("../decorators");
const _filters = require("../filters");
const _guards = require("../guards");
const _eventsservice = require("./events.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let EventsGateway = class EventsGateway {
    getServerInfo() {
        return (0, _rxjs.interval)(1000).pipe((0, _rxjs.map)(async ()=>{
            const data = await this.eventsService.handleGetInfo();
            return {
                event: _constants.EVENTS.SERVER_INFO,
                data
            };
        }), (0, _rxjs.mergeAll)());
    }
    constructor(eventsService){
        this.eventsService = eventsService;
    }
};
_ts_decorate([
    (0, _websockets.WebSocketServer)(),
    _ts_metadata("design:type", typeof _ws.Server === "undefined" ? Object : _ws.Server)
], EventsGateway.prototype, "server", void 0);
_ts_decorate([
    (0, _websockets.SubscribeMessage)(_constants.EVENTS.SERVER_INFO),
    (0, _decorators.Permission)('monitor:server:list'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", typeof _rxjs.Observable === "undefined" ? Object : _rxjs.Observable)
], EventsGateway.prototype, "getServerInfo", null);
EventsGateway = _ts_decorate([
    (0, _websockets.WebSocketGateway)({
        cors: true,
        transports: [
            'websocket'
        ]
    }),
    (0, _common.UseGuards)(_guards.WsAuthGuard),
    (0, _common.UseFilters)(_filters.WsDefaultFilter),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _eventsservice.EventsService === "undefined" ? Object : _eventsservice.EventsService
    ])
], EventsGateway);

//# sourceMappingURL=events.gateway.js.map