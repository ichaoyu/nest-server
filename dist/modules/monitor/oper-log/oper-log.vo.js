"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FindOperLogPageVO", {
    enumerable: true,
    get: function() {
        return FindOperLogPageVO;
    }
});
const _database = require("../../../database");
const _models = require("../../../models");
/**
 * 操作日志分页响应传输对象
 */ let OperLogEntityVO = class OperLogEntityVO extends (0, _models.PageVO)(_database.SysOperLogEntityVO) {
};
let FindOperLogPageVO = class FindOperLogPageVO extends (0, _models.ResultVO)(OperLogEntityVO) {
};

//# sourceMappingURL=oper-log.vo.js.map