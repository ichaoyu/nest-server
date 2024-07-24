"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FastifyOnRequestHook", {
    enumerable: true,
    get: function() {
        return FastifyOnRequestHook;
    }
});
const _constants = require("../../constants");
const _utils = require("../../utils");
async function FastifyOnRequestHook(req, res) {
    // 对匹配的路径做鉴权
    if ([
        _constants.EXTRAS.QUEUES_PATH
    ].includes(req.originalUrl)) {
        const oldVal = req.cookies[_constants.EXTRAS.BASIC_AUTH_KEY] || '';
        const isMatch = await _utils.HashUtil.compare(_constants.EXTRAS.BASIC_AUTH_RAW, oldVal);
        if (!isMatch && !req.originalUrl.includes(_constants.EXTRAS.BASIC_AUTH_PATH)) {
            res.redirect(302, `${_constants.EXTRAS.BASIC_AUTH_PATH}?url=${req.originalUrl}`);
        }
    }
    return;
}

//# sourceMappingURL=on-request.hook.js.map