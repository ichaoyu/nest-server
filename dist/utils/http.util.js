"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpUtil", {
    enumerable: true,
    get: function() {
        return HttpUtil;
    }
});
const _common = require("@nestjs/common");
const _axios = /*#__PURE__*/ _interop_require_default(require("axios"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const HttpUtil = {
    /**
   * 客户端
   */ client: (()=>{
        const client = _axios.default.create({
            timeout: 8000,
            maxRedirects: 5
        });
        client.interceptors.request.use((req)=>{
            return req;
        });
        client.interceptors.response.use((res)=>{
            return res;
        }, (err)=>{
            throw new _common.InternalServerErrorException(err);
        });
        return client;
    })()
};

//# sourceMappingURL=http.util.js.map