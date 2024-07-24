"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WebSiteInfoEntity", {
    enumerable: true,
    get: function() {
        return WebSiteInfoEntity;
    }
});
const _typeorm = require("typeorm");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let WebSiteInfoEntity = class WebSiteInfoEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'name'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "name", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'domain'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "domain", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'email'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "email", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'wx'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "wx", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'icp'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "icp", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'code'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "code", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'json'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "json", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'title'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "title", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'keywords'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "keywords", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'description'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "description", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'template'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "template", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'appid'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "appid", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'secret'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "secret", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'update_by'
    }),
    _ts_metadata("design:type", String)
], WebSiteInfoEntity.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)({
        name: 'created_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], WebSiteInfoEntity.prototype, "createTime", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)({
        name: 'updated_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], WebSiteInfoEntity.prototype, "updateTime", void 0);
WebSiteInfoEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'web_site_info'
    })
], WebSiteInfoEntity);

//# sourceMappingURL=web-siteinfo.entity.js.map