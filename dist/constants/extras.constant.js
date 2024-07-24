/**
 * 额外配置
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EXTRAS", {
    enumerable: true,
    get: function() {
        return EXTRAS;
    }
});
const EXTRAS = {
    /**
   * 应用名称
   */ APP_NAME: 'nest-service',
    /**
   * 本地IP
   */ LOCAL_IP: '127.0.0.1',
    /**
   * 本地IP文本
   */ LOCAL_IP_TEXT: '内网地址',
    /**
   * 默认IP
   */ DEFAULT_IP: 'XX.XX',
    /**
   * 默认地址
   */ DEFAULT_ADDR: 'XX XX',
    /**
   * 地址解析服务链接
   */ ADDR_URL: 'https://searchplugin.csdn.net/api/v1/ip/get',
    /**
   * 基础鉴权标识
   */ BASIC_AUTH_KEY: 'WWW-Authenticate',
    /**
   * 基础鉴权原始
   */ BASIC_AUTH_RAW: 'admin:123456',
    /**
   * 管理员权限
   */ ADMIN_PERMISSION: '*:*:*'
};

//# sourceMappingURL=extras.constant.js.map