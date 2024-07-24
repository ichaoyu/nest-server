"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedisModule", {
    enumerable: true,
    get: function() {
        return RedisModule;
    }
});
const _common = require("@nestjs/common");
const _redisproviders = require("./redis.providers");
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
let RedisModule = class RedisModule {
    static registerAsync(params) {
        const { global, createType, clientToken, optionsToken, optionsProvider } = params;
        let RedisCoreModule = class RedisCoreModule {
            static create() {
                return {
                    module: RedisCoreModule,
                    global,
                    providers: [
                        (0, _redisproviders.createRedisCommonOptions)(optionsToken, optionsProvider),
                        (0, _redisproviders.createFactory)(createType)(clientToken, optionsToken)
                    ],
                    exports: [
                        clientToken
                    ]
                };
            }
            async onModuleDestroy() {
                await this.client.quit();
            }
            constructor(client){
                this.client = client;
            }
        };
        RedisCoreModule = _ts_decorate([
            (0, _common.Module)({}),
            _ts_param(0, (0, _common.Inject)(clientToken)),
            _ts_metadata("design:type", Function),
            _ts_metadata("design:paramtypes", [
                Object
            ])
        ], RedisCoreModule);
        return RedisCoreModule.create();
    }
};

//# sourceMappingURL=redis.module.js.map