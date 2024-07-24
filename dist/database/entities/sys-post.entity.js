"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysPostEntity", {
    enumerable: true,
    get: function() {
        return SysPostEntity;
    }
});
const _typeorm = require("typeorm");
const _constants = require("../../constants");
const _ = require(".");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let SysPostEntity = class SysPostEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysPostEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'post_code'
    }),
    _ts_metadata("design:type", String)
], SysPostEntity.prototype, "postCode", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'post_name'
    }),
    _ts_metadata("design:type", String)
], SysPostEntity.prototype, "postName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'post_sort'
    }),
    _ts_metadata("design:type", Number)
], SysPostEntity.prototype, "postSort", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'status',
        type: 'enum',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysPostEntity.prototype, "status", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'remark'
    }),
    _ts_metadata("design:type", String)
], SysPostEntity.prototype, "remark", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'create_by'
    }),
    _ts_metadata("design:type", String)
], SysPostEntity.prototype, "createBy", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)({
        name: 'create_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysPostEntity.prototype, "createTime", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'update_by'
    }),
    _ts_metadata("design:type", String)
], SysPostEntity.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)({
        name: 'update_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysPostEntity.prototype, "updateTime", void 0);
_ts_decorate([
    (0, _typeorm.ManyToMany)(()=>_.SysUserEntity, (user)=>user.posts),
    _ts_metadata("design:type", Array)
], SysPostEntity.prototype, "users", void 0);
SysPostEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'sys_post'
    })
], SysPostEntity);

//# sourceMappingURL=sys-post.entity.js.map