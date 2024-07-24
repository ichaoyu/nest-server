"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _cachemanager = require("@nestjs/cache-manager");
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _core = require("@nestjs/core");
const _jwt = require("@nestjs/jwt");
const _typeorm = require("@nestjs/typeorm");
const _nestjspino = require("nestjs-pino");
const _captcha = require("./shared/captcha");
const _excel = require("./shared/excel");
const _redis = require("./shared/redis");
const _events = require("./events");
const _filters = require("./filters");
const _guards = require("./guards");
const _interceptors = require("./interceptors");
const _modules = require("./modules");
const _options = require("./options");
const _pipes = require("./pipes");
const _queues = require("./queues");
const _shared = require("./shared");
const _utils = require("./utils");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _config.ConfigModule.forRoot(_options.CONFIG_OPTIONS),
            _nestjspino.LoggerModule.forRootAsync(_options.LOGGER_OPTIONS),
            _typeorm.TypeOrmModule.forRootAsync(_options.TYPEORM_OPTIONS),
            _jwt.JwtModule.registerAsync(_options.JWT_OPTIONS),
            _cachemanager.CacheModule.registerAsync(_options.CACHE_OPTIONS),
            _captcha.CaptchaModule.registerAsync(_options.CAPTCHA_OPTIONS),
            _excel.ExcelModule.registerAsync(_options.EXCEL_OPTIONS),
            _redis.RedisModule.registerAsync(_options.REDIS_OPTIONS),
            _config.ConditionalModule.registerWhen(_events.EventsModule, ()=>!_utils.SysUtil.isTesting),
            _queues.QueuesModule,
            _shared.SharedModule,
            _modules.IndexModule
        ],
        providers: [
            {
                provide: _core.APP_GUARD,
                useClass: _guards.AuthGuard
            },
            {
                provide: _core.APP_INTERCEPTOR,
                useClass: _interceptors.CacheKeyInterceptor
            },
            {
                provide: _core.APP_INTERCEPTOR,
                useClass: _interceptors.ResponseInterceptor
            },
            {
                provide: _core.APP_INTERCEPTOR,
                useClass: _interceptors.OperLogInterceptor
            },
            {
                provide: _core.APP_PIPE,
                useClass: _pipes.ValidationPipe
            },
            {
                provide: _core.APP_FILTER,
                useClass: _filters.ValidationFilter
            },
            {
                provide: _core.APP_FILTER,
                useClass: _filters.DefaultFilter
            },
            {
                provide: _core.APP_FILTER,
                useClass: _filters.NotFoundFilter
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map