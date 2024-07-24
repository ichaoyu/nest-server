"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OperLogProcessor", {
    enumerable: true,
    get: function() {
        return OperLogProcessor;
    }
});
const _bull = require("@nestjs/bull");
const _bull1 = require("bull");
const _constants = require("../constants");
const _shared = require("../shared");
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
let OperLogProcessor = class OperLogProcessor {
    async execute(job) {
        const { ip, operName, ...rest } = job.data;
        const { dept } = await this.sharedService.getUserWithDeptByName(operName);
        const { deptName } = dept;
        const operIp = await _utils.SysUtil.parseIP(ip);
        const operLocation = await _utils.SysUtil.parseAddress(operIp);
        await this.sharedService.setOperLog({
            ...rest,
            deptName,
            operName,
            operIp,
            operLocation
        });
        return {};
    }
    constructor(sharedService){
        this.sharedService = sharedService;
    }
};
_ts_decorate([
    (0, _bull.Process)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _bull1.Job === "undefined" ? Object : _bull1.Job
    ]),
    _ts_metadata("design:returntype", Promise)
], OperLogProcessor.prototype, "execute", null);
OperLogProcessor = _ts_decorate([
    (0, _bull.Processor)(_constants.QUEUES.OPER_LOG),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _shared.SharedService === "undefined" ? Object : _shared.SharedService
    ])
], OperLogProcessor);

//# sourceMappingURL=oper-log.processor.js.map