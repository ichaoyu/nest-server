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
    FindMenuListVO: function() {
        return FindMenuListVO;
    },
    GetMenuTreeVO: function() {
        return GetMenuTreeVO;
    }
});
const _database = require("../../../database");
const _models = require("../../../models");
let FindMenuListVO = class FindMenuListVO extends (0, _models.ResultVO)([
    _database.SysMenuEntityVO
]) {
};
let GetMenuTreeVO = class GetMenuTreeVO extends (0, _models.ResultVO)([
    _models.TreeNodeVO
]) {
};

//# sourceMappingURL=menu.vo.js.map