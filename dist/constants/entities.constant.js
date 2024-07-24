/**
 * 系统内置
 */ "use strict";
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
    ENTITY_BIZ_STATUS: function() {
        return ENTITY_BIZ_STATUS;
    },
    ENTITY_BIZ_TYPE: function() {
        return ENTITY_BIZ_TYPE;
    },
    ENTITY_CONFIG_TYPE: function() {
        return ENTITY_CONFIG_TYPE;
    },
    ENTITY_DEL_FLAG: function() {
        return ENTITY_DEL_FLAG;
    },
    ENTITY_IS_CACHE: function() {
        return ENTITY_IS_CACHE;
    },
    ENTITY_IS_DEFAULT: function() {
        return ENTITY_IS_DEFAULT;
    },
    ENTITY_IS_FRAME: function() {
        return ENTITY_IS_FRAME;
    },
    ENTITY_LOGIN_STATUS: function() {
        return ENTITY_LOGIN_STATUS;
    },
    ENTITY_MENU_TYPE: function() {
        return ENTITY_MENU_TYPE;
    },
    ENTITY_SEX: function() {
        return ENTITY_SEX;
    },
    ENTITY_STATUS: function() {
        return ENTITY_STATUS;
    },
    ENTITY_VISIBLE: function() {
        return ENTITY_VISIBLE;
    }
});
var ENTITY_CONFIG_TYPE;
(function(ENTITY_CONFIG_TYPE) {
    /**
   * 是
   */ ENTITY_CONFIG_TYPE["YES"] = "Y";
    /**
   * 否
   */ ENTITY_CONFIG_TYPE["NO"] = "N";
})(ENTITY_CONFIG_TYPE || (ENTITY_CONFIG_TYPE = {}));
var ENTITY_MENU_TYPE;
(function(ENTITY_MENU_TYPE) {
    /**
   * 目录
   */ ENTITY_MENU_TYPE["FOLDER"] = "M";
    /**
   * 菜单
   */ ENTITY_MENU_TYPE["MENU"] = "C";
    /**
   * 按钮
   */ ENTITY_MENU_TYPE["BUTTON"] = "F";
})(ENTITY_MENU_TYPE || (ENTITY_MENU_TYPE = {}));
var ENTITY_IS_FRAME;
(function(ENTITY_IS_FRAME) {
    /**
   * 是
   */ ENTITY_IS_FRAME["YES"] = "0";
    /**
   * 否
   */ ENTITY_IS_FRAME["NO"] = "1";
})(ENTITY_IS_FRAME || (ENTITY_IS_FRAME = {}));
var ENTITY_IS_CACHE;
(function(ENTITY_IS_CACHE) {
    /**
   * 是
   */ ENTITY_IS_CACHE["YES"] = "0";
    /**
   * 否
   */ ENTITY_IS_CACHE["NO"] = "1";
})(ENTITY_IS_CACHE || (ENTITY_IS_CACHE = {}));
var ENTITY_VISIBLE;
(function(ENTITY_VISIBLE) {
    /**
   * 是
   */ ENTITY_VISIBLE["YES"] = "0";
    /**
   * 否
   */ ENTITY_VISIBLE["NO"] = "1";
})(ENTITY_VISIBLE || (ENTITY_VISIBLE = {}));
var ENTITY_STATUS;
(function(ENTITY_STATUS) {
    /**
   * 正常
   */ ENTITY_STATUS["NORMAL"] = "0";
    /**
   * 停用
   */ ENTITY_STATUS["DISABLE"] = "1";
})(ENTITY_STATUS || (ENTITY_STATUS = {}));
var ENTITY_DEL_FLAG;
(function(ENTITY_DEL_FLAG) {
    /**
   * 存在
   */ ENTITY_DEL_FLAG["EXIST"] = "0";
    /**
   * 删除
   */ ENTITY_DEL_FLAG["DELETE"] = "2";
})(ENTITY_DEL_FLAG || (ENTITY_DEL_FLAG = {}));
var ENTITY_IS_DEFAULT;
(function(ENTITY_IS_DEFAULT) {
    /**
   * 是
   */ ENTITY_IS_DEFAULT["YES"] = "Y";
    /**
   * 否
   */ ENTITY_IS_DEFAULT["NO"] = "N";
})(ENTITY_IS_DEFAULT || (ENTITY_IS_DEFAULT = {}));
var ENTITY_LOGIN_STATUS;
(function(ENTITY_LOGIN_STATUS) {
    /**
   * 成功
   */ ENTITY_LOGIN_STATUS["SUCCESS"] = "0";
    /**
   * 失败
   */ ENTITY_LOGIN_STATUS["FAIL"] = "1";
})(ENTITY_LOGIN_STATUS || (ENTITY_LOGIN_STATUS = {}));
var ENTITY_SEX;
(function(ENTITY_SEX) {
    /**
   * 男
   */ ENTITY_SEX["MALE"] = "0";
    /**
   * 女
   */ ENTITY_SEX["FEMALE"] = "1";
    /**
   * 未知
   */ ENTITY_SEX["UNKNOWN"] = "2";
})(ENTITY_SEX || (ENTITY_SEX = {}));
var ENTITY_BIZ_TYPE;
(function(ENTITY_BIZ_TYPE) {
    /**
   * 其他
   */ ENTITY_BIZ_TYPE["OTHER"] = "0";
    /**
   * 新增
   */ ENTITY_BIZ_TYPE["INSERT"] = "1";
    /**
   * 修改
   */ ENTITY_BIZ_TYPE["UPDATE"] = "2";
    /**
   * 删除
   */ ENTITY_BIZ_TYPE["DELETE"] = "3";
    /**
   * 授权
   */ ENTITY_BIZ_TYPE["GRANT"] = "4";
    /**
   * 导出
   */ ENTITY_BIZ_TYPE["EXPORT"] = "5";
    /**
   * 导入
   */ ENTITY_BIZ_TYPE["IMPORT"] = "6";
    /**
   * 强退
   */ ENTITY_BIZ_TYPE["FORCE"] = "7";
    /**
   * 清空数据
   */ ENTITY_BIZ_TYPE["CLEAN"] = "8";
})(ENTITY_BIZ_TYPE || (ENTITY_BIZ_TYPE = {}));
var ENTITY_BIZ_STATUS;
(function(ENTITY_BIZ_STATUS) {
    /**
   * 成功
   */ ENTITY_BIZ_STATUS["SUCCESS"] = "0";
    /**
   * 失败
   */ ENTITY_BIZ_STATUS["FAIL"] = "1";
})(ENTITY_BIZ_STATUS || (ENTITY_BIZ_STATUS = {}));

//# sourceMappingURL=entities.constant.js.map