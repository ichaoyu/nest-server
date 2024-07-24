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
    FindDeptListVO: function() {
        return FindDeptListVO;
    },
    GetDeptTreeVO: function() {
        return GetDeptTreeVO;
    }
});
const _database = require("../../../database");
const _models = require("../../../models");
let FindDeptListVO = class FindDeptListVO extends (0, _models.ResultVO)([
    _database.SysDeptEntityVO
]) {
};
let GetDeptTreeVO = class GetDeptTreeVO extends (0, _models.ResultVO)([
    _models.TreeNodeVO
]) {
};

//# sourceMappingURL=dept.vo.js.map