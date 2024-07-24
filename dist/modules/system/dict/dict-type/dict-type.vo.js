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
    FindDictTypePageVO: function() {
        return FindDictTypePageVO;
    },
    GetDictTypeVO: function() {
        return GetDictTypeVO;
    }
});
const _database = require("../../../../database");
const _models = require("../../../../models");
/**
 * 字典类型分页响应传输对象
 */ let DictTypePageVO = class DictTypePageVO extends (0, _models.PageVO)(_database.SysDictTypeEntityVO) {
};
let FindDictTypePageVO = class FindDictTypePageVO extends (0, _models.ResultVO)(DictTypePageVO) {
};
let GetDictTypeVO = class GetDictTypeVO extends (0, _models.ResultVO)(_database.SysDictTypeEntityVO) {
};

//# sourceMappingURL=dict-type.vo.js.map