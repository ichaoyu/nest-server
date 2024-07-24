"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CacheUtil", {
    enumerable: true,
    get: function() {
        return CacheUtil;
    }
});
const _constants = require("../constants");
const CacheUtil = {
    /**
   * 获取会话标识
   * @param {string} tokenId 会话编号
   */ getTokenKey: (tokenId)=>`${_constants.CACHES.LOGIN_TOKEN_KEY}${tokenId}`,
    /**
   * 获取用户标识
   * @param {string} userId 用户编号
   */ getUserKey: (userId)=>`${_constants.CACHES.LOGIN_USER_KEY}${userId}`,
    /**
   * 获取字典标识
   * @param {string} dictType 字典类型
   */ getDictKey: (dictType)=>`${_constants.CACHES.SYS_DICT_KEY}${dictType}`,
    /**
   * 获取配置标识
   * @param {string} key 配置键名
   */ getConfigKey: (key)=>`${_constants.CACHES.SYS_CONFIG_KEY}${key}`
};

//# sourceMappingURL=cache.util.js.map