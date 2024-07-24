"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _colorette = require("colorette");
const _pinopretty = /*#__PURE__*/ _interop_require_default(require("pino-pretty"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = ()=>{
    return (0, _pinopretty.default)({
        translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
        messageFormat: (log, messageKey)=>{
            const message = [
                log.context ? `[${log.context}]` : '',
                log[messageKey]
            ].filter((v)=>v).join(' ');
            return (0, _colorette.reset)(message);
        },
        singleLine: true,
        ignore: 'context,hostname'
    });
};

//# sourceMappingURL=logger-pretty.transport.js.map