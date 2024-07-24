"use strict";
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
    FindConfigPageVO: function() {
        return FindConfigPageVO;
    },
    GetConfigValueVO: function() {
        return GetConfigValueVO;
    }
});
const _database = require("../../../database");
const _models = require("../../../models");
/**
 * 配置分页响应传输对象
 */ let ConfigPageVO = class ConfigPageVO extends (0, _models.PageVO)(_database.SysConfigEntityVO) {
};
let FindConfigPageVO = class FindConfigPageVO extends (0, _models.ResultVO)(ConfigPageVO) {
};
let GetConfigValueVO = class GetConfigValueVO extends (0, _models.ResultVO)(_database.SysConfigEntityVO) {
};

//# sourceMappingURL=config.vo.js.map