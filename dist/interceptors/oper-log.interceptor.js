"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OperLogInterceptor", {
    enumerable: true,
    get: function() {
        return OperLogInterceptor;
    }
});
const _bull = require("@nestjs/bull");
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _core = require("@nestjs/core");
const _bull1 = require("bull");
const _lodashunified = require("lodash-unified");
const _rxjs = require("rxjs");
const _constants = require("../constants");
const _decorators = require("../decorators");
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
let OperLogInterceptor = class OperLogInterceptor {
    async intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const apiPath = this.configService.get('app.apiPath');
        const isApi = request.url.includes(apiPath);
        // 非接口请求直接跳过
        if (!isApi) {
            return next.handle();
        }
        const operLog = this.reflector.get(_decorators.OperLog, context.getHandler());
        // 没有操作日志注解直接跳过
        if (!operLog) {
            return next.handle();
        }
        const { title, bizType } = operLog;
        const method = `${context.getClass().name}.${context.getHandler().name}`;
        const logData = {
            title,
            bizType,
            method,
            requestMethod: request.method,
            requestUrl: request.url,
            requestParams: // 导入业务参数不赋值
            bizType !== _constants.ENTITY_BIZ_TYPE.IMPORT ? JSON.stringify((0, _lodashunified.pick)(request, [
                'params',
                'query',
                'body'
            ])) : null,
            ip: request.ip,
            operName: request.payload.userName,
            operTime: Date.now()
        };
        return next.handle().pipe((0, _rxjs.tap)(async (data)=>{
            const { operTime, ...rest } = logData;
            const costTime = Date.now() - operTime;
            this.operLogQueue.add({
                ...rest,
                requestResult: // 导出业务结果不赋值
                logData.bizType !== _constants.ENTITY_BIZ_TYPE.EXPORT ? JSON.stringify(data) : null,
                status: _constants.ENTITY_BIZ_STATUS.SUCCESS,
                operTime: new Date(operTime),
                costTime
            });
        }), (0, _rxjs.catchError)((err)=>{
            const { operTime, ...rest } = logData;
            const costTime = Date.now() - operTime;
            this.operLogQueue.add({
                ...rest,
                status: _constants.ENTITY_BIZ_STATUS.FAIL,
                errorMsg: err.message,
                operTime: new Date(operTime),
                costTime
            });
            return (0, _rxjs.throwError)(()=>err);
        }));
    }
    constructor(operLogQueue, configService, reflector){
        this.operLogQueue = operLogQueue;
        this.configService = configService;
        this.reflector = reflector;
    }
};
OperLogInterceptor = _ts_decorate([
    (0, _common.Injectable)({
        scope: _common.Scope.REQUEST
    }),
    _ts_param(0, (0, _bull.InjectQueue)(_constants.QUEUES.OPER_LOG)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _bull1.Queue === "undefined" ? Object : _bull1.Queue,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService,
        typeof _core.Reflector === "undefined" ? Object : _core.Reflector
    ])
], OperLogInterceptor);

//# sourceMappingURL=oper-log.interceptor.js.map