"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysUtil", {
    enumerable: true,
    get: function() {
        return SysUtil;
    }
});
const _common = require("@nestjs/common");
const _lodashunified = require("lodash-unified");
const _uaparserjs = /*#__PURE__*/ _interop_require_default(require("ua-parser-js"));
const _constants = require("../constants");
const _httputil = require("./http.util");
const _proxyutil = require("./proxy.util");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SysUtil = {
    /**
   * 是否是执行测试
   */ isTesting: process.env.NODE_ENV === 'testing',
    /**
   * 是否是执行开发
   */ isDevelopment: process.env.NODE_ENV === 'development',
    /**
   * 是否是执行生产
   */ isProduction: process.env.NODE_ENV === 'production',
    /**
   * 本地IP V4
   */ localIP4: async ()=>{
        const network = await getDefaultNetwork();
        return network.ip4;
    },
    /**
   * 本地IP V6
   * @returns
   */ localIP6: async ()=>{
        const network = await getDefaultNetwork();
        return network.ip6;
    },
    /**
   * 是否是本地IP
   * @param {string} ip IP地址
   */ isLocalIP: async (ip)=>{
        const internalIP = await SysUtil.localIP4();
        if (ip.includes(internalIP) || ip.includes(_constants.EXTRAS.LOCAL_IP)) {
            return true;
        }
        return false;
    },
    /**
   * 解析IP地址
   * @param {string} ip IP地址
   */ parseIP: async (ip)=>{
        if (ip === null) {
            return _constants.EXTRAS.DEFAULT_IP;
        }
        const isLocalIP = await SysUtil.isLocalIP(ip);
        return isLocalIP ? _constants.EXTRAS.LOCAL_IP : ip;
    },
    /**
   * 解析用户代理字符串
   * @param {string} ua 用户代理字符串
   */ parseUA: (ua)=>{
        const uaParser = new _uaparserjs.default(ua, {
            browser: [
                [
                    /(apifox)\/([\w\.]+)/i
                ],
                [
                    _uaparserjs.default.BROWSER.NAME,
                    _uaparserjs.default.BROWSER.VERSION
                ]
            ]
        });
        return uaParser.getResult();
    },
    /**
   * 解析地址
   * @param {string} ip IP地址
   */ parseAddress: async (ip)=>{
        const isLocalIP = await SysUtil.isLocalIP(ip);
        if (isLocalIP) {
            return _constants.EXTRAS.LOCAL_IP_TEXT;
        }
        const { data } = await _httputil.HttpUtil.client.get(`${_constants.EXTRAS.ADDR_URL}`, {
            params: {
                ip
            }
        }).catch((error)=>{
            throw new _common.BadRequestException(error.response.data);
        });
        if ((0, _lodashunified.isEmpty)(data.data.address)) {
            return _constants.EXTRAS.DEFAULT_ADDR;
        }
        const [country, province, city, operation] = data.data.address.split(' ').filter((v)=>v !== '');
        return `${province} ${city}`;
    }
};
/**
 * 获取默认网路信息
 */ async function getDefaultNetwork() {
    // @ts-ignore
    return await _proxyutil.ProxyUtil.si.networkInterfaces('default');
}

//# sourceMappingURL=sys.util.js.map