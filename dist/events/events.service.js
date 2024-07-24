"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EventsService", {
    enumerable: true,
    get: function() {
        return EventsService;
    }
});
const _common = require("@nestjs/common");
const _interfaces = require("../interfaces");
const _constants = require("../constants");
const _utils = require("../utils");
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
let EventsService = class EventsService {
    async handleGetInfo() {
        //#region CPU
        const { currentLoadUser, currentLoadSystem, currentLoadIdle } = await _utils.ProxyUtil.si.currentLoad();
        const { cores } = await _utils.ProxyUtil.si.cpu();
        const cpuInfo = [
            {
                key: '核心数',
                value: cores
            },
            {
                key: '用户使用率',
                value: currentLoadUser.toPrecision(2)
            },
            {
                key: '系统使用率',
                value: currentLoadSystem.toPrecision(2)
            },
            {
                key: '当前空闲率',
                value: currentLoadIdle.toPrecision(2)
            }
        ];
        //#endregion
        //#region Memory
        const { total, free, used } = await _utils.ProxyUtil.si.mem();
        const sysMemoryInfo = {
            total,
            used,
            free,
            rate: (1 - free / total).toPrecision(2)
        };
        const { heapTotal, heapUsed } = process.memoryUsage();
        const nodeMemoryInfo = {
            total: heapTotal,
            used: heapUsed,
            free: heapTotal - heapUsed,
            rate: (1 - heapUsed / heapTotal).toPrecision(2)
        };
        const memInfo = [
            {
                key: '总内存',
                sys: sysMemoryInfo.total,
                node: nodeMemoryInfo.total
            },
            {
                key: '已用内存',
                sys: sysMemoryInfo.used,
                node: nodeMemoryInfo.used
            },
            {
                key: '剩余内存',
                sys: sysMemoryInfo.free,
                node: nodeMemoryInfo.free
            },
            {
                key: '使用率',
                sys: sysMemoryInfo.rate,
                node: nodeMemoryInfo.rate
            }
        ];
        //#endregion
        //#region OS
        const osInfoBase = await _utils.ProxyUtil.si.osInfo();
        const ip = await _utils.SysUtil.localIP4();
        const osInfo = {
            ...osInfoBase,
            ip
        };
        //#endregion
        //#region Disk
        const diskInfo = await _utils.ProxyUtil.si.fsSize();
        //#endregion
        //#region Node
        const version = process.version;
        const nodePath = process.argv[0];
        const filePath = process.argv[1];
        const args = process.argv.splice(2);
        const uptime = process.uptime();
        const nodeInfo = {
            version,
            nodePath,
            filePath,
            args,
            uptime
        };
        //#endregion
        //#region
        const rawInfo = await this.redisClient.info();
        const db_size = await this.redisClient.dbsize();
        const parsedInfo = _utils.ProxyUtil.getProperties(rawInfo);
        const redisInfo = {
            db_size,
            ...parsedInfo
        };
        //#endregion
        return {
            cpu: cpuInfo,
            mem: memInfo,
            os: osInfo,
            disk: diskInfo,
            node: nodeInfo,
            redis: redisInfo
        };
    }
    constructor(redisClient){
        this.redisClient = redisClient;
    }
};
EventsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_constants.REDIS_CLIENT)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _interfaces.RedisClient === "undefined" ? Object : _interfaces.RedisClient
    ])
], EventsService);

//# sourceMappingURL=events.service.js.map