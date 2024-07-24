/**
 * 缓存键名
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CACHES", {
    enumerable: true,
    get: function() {
        return CACHES;
    }
});
var CACHES;
(function(CACHES) {
    /**
   * 登录会话
   */ CACHES["LOGIN_TOKEN_KEY"] = "login_tokens:";
    /**
   * 登录用户
   */ CACHES["LOGIN_USER_KEY"] = "login_users:";
    /**
   * 参数配置
   */ CACHES["SYS_CONFIG_KEY"] = "sys_config:";
    /**
   * 字典管理
   */ CACHES["SYS_DICT_KEY"] = "sys_dict:";
})(CACHES || (CACHES = {}));

//# sourceMappingURL=caches.constant.js.map