"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "QueuesModule", {
    enumerable: true,
    get: function() {
        return QueuesModule;
    }
});
const _bull = require("@nestjs/bull");
const _common = require("@nestjs/common");
const _options = require("../options");
const _loginlogprocessor = require("./login-log.processor");
const _operlogprocessor = require("./oper-log.processor");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let QueuesModule = class QueuesModule {
};
QueuesModule = _ts_decorate([
    (0, _common.Global)(),
    (0, _common.Module)({
        imports: [
            _bull.BullModule.forRootAsync(_options.BULL_OPTIONS),
            _bull.BullModule.registerQueue(..._options.BULL_QUEUES)
        ],
        providers: [
            _loginlogprocessor.LoginLogProcessor,
            _operlogprocessor.OperLogProcessor
        ],
        exports: [
            _bull.BullModule
        ]
    })
], QueuesModule);

//# sourceMappingURL=queues.module.js.map