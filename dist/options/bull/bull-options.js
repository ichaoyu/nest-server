"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BULL_OPTIONS: function() {
        return BULL_OPTIONS;
    },
    BULL_QUEUES: function() {
        return BULL_QUEUES;
    }
});
const _config = require("@nestjs/config");
const _constants = require("../../constants");
const BULL_OPTIONS = {
    useFactory (configService) {
        return configService.get('bull');
    },
    inject: [
        _config.ConfigService
    ]
};
const BULL_QUEUES = Object.values(_constants.QUEUES).map((v)=>({
        name: v
    }));

//# sourceMappingURL=bull-options.js.map