"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FindLoginLogPageVO", {
    enumerable: true,
    get: function() {
        return FindLoginLogPageVO;
    }
});
const _database = require("../../../database");
const _models = require("../../../models");
/**
 * 登录日志分页响应传输对象
 */ let LoginLogPageVO = class LoginLogPageVO extends (0, _models.PageVO)(_database.SysLoginLogEntityVO) {
};
let FindLoginLogPageVO = class FindLoginLogPageVO extends (0, _models.ResultVO)(LoginLogPageVO) {
};

//# sourceMappingURL=login-log.vo.js.map