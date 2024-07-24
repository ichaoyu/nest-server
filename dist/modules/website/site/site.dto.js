"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateConfigDTO", {
    enumerable: true,
    get: function() {
        return UpdateConfigDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UpdateConfigDTO = class UpdateConfigDTO {
};
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        name: 'name',
        description: '网站名称',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "name", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        name: 'domain',
        description: '网站域名',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "domain", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '邮箱',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '微信',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "wx", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: 'ICP备案号',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "icp", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '站点统计代码',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "code", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '万能配置',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "json", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '页面标题',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "title", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '页面关键词',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "keywords", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '页面描述',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "description", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: 'view模板',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "template", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '微信小程序appid',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "appid", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        description: '微信小程序secret',
        example: ''
    }),
    (0, _classvalidator.IsOptional)(),
    _ts_metadata("design:type", String)
], UpdateConfigDTO.prototype, "secret", void 0);

//# sourceMappingURL=site.dto.js.map