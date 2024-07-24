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
    CreatePostDTO: function() {
        return CreatePostDTO;
    },
    FindPostPageDTO: function() {
        return FindPostPageDTO;
    },
    UpdatePostDTO: function() {
        return UpdatePostDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
const _constants = require("../../../constants");
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
let FindPostPageDTO = class FindPostPageDTO extends _models.PageDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '岗位编码',
        default: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindPostPageDTO.prototype, "postCode", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '岗位名称',
        default: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], FindPostPageDTO.prototype, "postName", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '状态',
        enum: _constants.ENTITY_STATUS,
        default: ''
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], FindPostPageDTO.prototype, "status", void 0);
let CreatePostDTO = class CreatePostDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '岗位名称'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '岗位名称不能为空'
    }),
    _ts_metadata("design:type", String)
], CreatePostDTO.prototype, "postName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '岗位编码'
    }),
    (0, _classvalidator.IsNotEmpty)({
        message: '岗位编码不能为空'
    }),
    _ts_metadata("design:type", String)
], CreatePostDTO.prototype, "postCode", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '岗位顺序'
    }),
    (0, _classvalidator.IsPositive)({
        message: '岗位顺序为正整数'
    }),
    _ts_metadata("design:type", Number)
], CreatePostDTO.prototype, "postSort", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '状态',
        enum: _constants.ENTITY_STATUS
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)(_constants.ENTITY_STATUS, {
        message: '状态非法值'
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], CreatePostDTO.prototype, "status", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '备注'
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], CreatePostDTO.prototype, "remark", void 0);
let UpdatePostDTO = class UpdatePostDTO extends CreatePostDTO {
};

//# sourceMappingURL=post.dto.js.map