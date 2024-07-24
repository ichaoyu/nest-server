"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WebSiteInfoEntityVO", {
    enumerable: true,
    get: function() {
        return WebSiteInfoEntityVO;
    }
});
const _swagger = require("@nestjs/swagger");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let WebSiteInfoEntityVO = class WebSiteInfoEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '网站名称'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "name", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '网站域名'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "domain", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '邮箱'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '微信'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "wx", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'ICP备案号'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "icp", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '站点统计代码'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "code", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '万能配置'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "json", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '页面标题'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "title", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '页面关键词'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "keywords", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '页面描述'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "description", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'view模板'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "template", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '微信小程序appid'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "appid", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '微信小程序secret'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "secret", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新者'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntityVO.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], WebSiteInfoEntityVO.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], WebSiteInfoEntityVO.prototype, "updateTime", void 0);

//# sourceMappingURL=web-siteinfo-entity.vo.js.map