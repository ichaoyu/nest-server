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
    FindAllConfigVO: function() {
        return FindAllConfigVO;
    },
    GetSiteInfoVO: function() {
        return GetSiteInfoVO;
    }
});
const _database = require("../../../database");
const _models = require("../../../models");
/**
 * 配置分页响应传输对象
 */ let ConfigPageVO = class ConfigPageVO extends (0, _models.PageVO)(_database.WebSiteInfoEntityVO) {
};
let FindAllConfigVO = class FindAllConfigVO extends (0, _models.ResultVO)(ConfigPageVO) {
};
let GetSiteInfoVO = class GetSiteInfoVO extends (0, _models.ResultVO)(_database.WebSiteInfoEntityVO) {
};

//# sourceMappingURL=site.vo.js.map