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
    FindAllocatedPageVO: function() {
        return FindAllocatedPageVO;
    },
    FindRolePageVO: function() {
        return FindRolePageVO;
    },
    FindUnallocatedPageVO: function() {
        return FindUnallocatedPageVO;
    }
});
const _swagger = require("@nestjs/swagger");
const _database = require("../../../database");
const _models = require("../../../models");
let RolePageItem = class RolePageItem extends (0, _swagger.IntersectionType)(_database.SysRoleEntityVO, (0, _swagger.PickType)(_database.SysRoleEntityRelationsVO, [
    'menus'
])) {
};
let RolePageVO = class RolePageVO extends (0, _models.PageVO)(RolePageItem) {
};
let FindRolePageVO = class FindRolePageVO extends (0, _models.ResultVO)(RolePageVO) {
};
let AllocatedPageItem = class AllocatedPageItem extends (0, _swagger.IntersectionType)(_database.SysUserEntityVO, (0, _swagger.PickType)(_database.SysUserEntityRelationsVO, [
    'roles'
])) {
};
let AllocatedPageVO = class AllocatedPageVO extends (0, _models.PageVO)(AllocatedPageItem) {
};
let FindAllocatedPageVO = class FindAllocatedPageVO extends (0, _models.ResultVO)(AllocatedPageVO) {
};
let UnallocatedPageVO = class UnallocatedPageVO extends (0, _models.PageVO)(_database.SysUserEntityVO) {
};
let FindUnallocatedPageVO = class FindUnallocatedPageVO extends (0, _models.ResultVO)(UnallocatedPageVO) {
};

//# sourceMappingURL=role.vo.js.map