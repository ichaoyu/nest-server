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
    FindUserPageVO: function() {
        return FindUserPageVO;
    },
    GetUserAddFormDataVO: function() {
        return GetUserAddFormDataVO;
    },
    GetUserEditFormDataVO: function() {
        return GetUserEditFormDataVO;
    },
    ImportUserTemplateVO: function() {
        return ImportUserTemplateVO;
    }
});
const _swagger = require("@nestjs/swagger");
const _database = require("../../../database");
const _models = require("../../../models");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UserPageItem = class UserPageItem extends (0, _swagger.IntersectionType)(_database.SysUserEntityVO, (0, _swagger.PickType)(_database.SysUserEntityRelationsVO, [
    'dept'
])) {
};
let UserPageVO = class UserPageVO extends (0, _models.PageVO)(UserPageItem) {
};
let FindUserPageVO = class FindUserPageVO extends (0, _models.ResultVO)(UserPageVO) {
};
/**
 * 用户表单数据响应传输对象
 */ let UserFormDataVO = class UserFormDataVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '岗位列表',
        type: [
            _database.SysPostEntityVO
        ]
    }),
    _ts_metadata("design:type", Array)
], UserFormDataVO.prototype, "posts", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '角色列表',
        type: [
            _database.SysRoleEntityVO
        ]
    }),
    _ts_metadata("design:type", Array)
], UserFormDataVO.prototype, "roles", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '岗位主键列表',
        type: 'array',
        items: {
            type: 'string'
        }
    }),
    _ts_metadata("design:type", Array)
], UserFormDataVO.prototype, "postIds", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '角色主键列表',
        type: 'array',
        items: {
            type: 'string'
        }
    }),
    _ts_metadata("design:type", Array)
], UserFormDataVO.prototype, "roleIds", void 0);
let GetUserAddFormDataVO = class GetUserAddFormDataVO extends (0, _models.ResultVO)(UserFormDataVO) {
};
let GetUserEditFormDataVO = class GetUserEditFormDataVO extends (0, _models.ResultVO)(UserFormDataVO) {
};
/**
 * 用户模板响应传输对象
 */ let UserTemplateVO = class UserTemplateVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '成功数量'
    }),
    _ts_metadata("design:type", Number)
], UserTemplateVO.prototype, "success", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '失败数量'
    }),
    _ts_metadata("design:type", Number)
], UserTemplateVO.prototype, "fail", void 0);
let ImportUserTemplateVO = class ImportUserTemplateVO extends (0, _models.ResultVO)(UserTemplateVO) {
};

//# sourceMappingURL=user.vo.js.map