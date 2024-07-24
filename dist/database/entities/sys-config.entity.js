"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysConfigEntity", {
    enumerable: true,
    get: function() {
        return SysConfigEntity;
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
let SysConfigEntity = class SysConfigEntity {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'bigint'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntity.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'config_name'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntity.prototype, "configName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'config_key'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntity.prototype, "configKey", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'config_value'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntity.prototype, "configValue", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'config_type',
        type: 'enum',
        enum: _constants.ENTITY_CONFIG_TYPE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_CONFIG_TYPE === "undefined" ? Object : _constants.ENTITY_CONFIG_TYPE)
], SysConfigEntity.prototype, "configType", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'remark'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntity.prototype, "remark", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'create_by'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntity.prototype, "createBy", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)({
        name: 'create_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysConfigEntity.prototype, "createTime", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        name: 'update_by'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntity.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)({
        name: 'update_time'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysConfigEntity.prototype, "updateTime", void 0);
SysConfigEntity = _ts_decorate([
    (0, _typeorm.Entity)({
        name: 'sys_config'
    })
], SysConfigEntity);

//# sourceMappingURL=sys-config.entity.js.map