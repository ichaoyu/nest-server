"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysDictDataEntity", {
    enumerable: true,
    get: function() {
        return SysDictDataEntity;
    }
});
const _typeorm = require("typeorm");
const _constants = require("../../constants");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let SysDictDataEntity = class SysDictDataEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'dict_sort'
    }),
    _ts_metadata("design:type", Number)
], SysDictDataEntity.prototype, "dictSort", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'dict_label'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntity.prototype, "dictLabel", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'dict_value'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntity.prototype, "dictValue", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'dict_type'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntity.prototype, "dictType", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'is_default',
        type: 'enum',
        enum: _constants.ENTITY_IS_DEFAULT
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_IS_DEFAULT === "undefined" ? Object : _constants.ENTITY_IS_DEFAULT)
], SysDictDataEntity.prototype, "isDefault", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'status',
        type: 'enum',
        enum: _constants.ENTITY_STATUS
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_STATUS === "undefined" ? Object : _constants.ENTITY_STATUS)
], SysDictDataEntity.prototype, "status", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'remark'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntity.prototype, "remark", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'create_by'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntity.prototype, "createBy", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)({
        name: 'create_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDictDataEntity.prototype, "createTime", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'update_by'
    }),
    _ts_metadata("design:type", String)
], SysDictDataEntity.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)({
        name: 'update_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysDictDataEntity.prototype, "updateTime", void 0);
SysDictDataEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'sys_dict_data'
    })
], SysDictDataEntity);

//# sourceMappingURL=sys-dict-data.entity.js.map