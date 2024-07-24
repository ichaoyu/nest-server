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
    FindDictDataPageVO: function() {
        return FindDictDataPageVO;
    },
    GetDictDataListVO: function() {
        return GetDictDataListVO;
    }
});
const _database = require("../../../../database");
const _models = require("../../../../models");
/**
 * 字典数据分页响应传输对象
 */ let DictDataPageVO = class DictDataPageVO extends (0, _models.PageVO)(_database.SysDictDataEntityVO) {
};
let FindDictDataPageVO = class FindDictDataPageVO extends (0, _models.ResultVO)(DictDataPageVO) {
};
let GetDictDataListVO = class GetDictDataListVO extends (0, _models.ResultVO)([
    _database.SysDictDataEntityVO
]) {
};

//# sourceMappingURL=dict-data.vo.js.map