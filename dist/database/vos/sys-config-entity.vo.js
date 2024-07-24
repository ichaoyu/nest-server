"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SysConfigEntityVO", {
    enumerable: true,
    get: function() {
        return SysConfigEntityVO;
    }
});
const _swagger = require("@nestjs/swagger");
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
let SysConfigEntityVO = class SysConfigEntityVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntityVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '参数名称'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntityVO.prototype, "configName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '参数键名'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntityVO.prototype, "configKey", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '参数键值'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntityVO.prototype, "configValue", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '系统内置（Y是 N否）',
        enum: _constants.ENTITY_CONFIG_TYPE
    }),
    _ts_metadata("design:type", typeof _constants.ENTITY_CONFIG_TYPE === "undefined" ? Object : _constants.ENTITY_CONFIG_TYPE)
], SysConfigEntityVO.prototype, "configType", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '备注'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntityVO.prototype, "remark", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建者'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntityVO.prototype, "createBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '创建时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysConfigEntityVO.prototype, "createTime", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新者'
    }),
    _ts_metadata("design:type", String)
], SysConfigEntityVO.prototype, "updateBy", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '更新时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], SysConfigEntityVO.prototype, "updateTime", void 0);

//# sourceMappingURL=sys-config-entity.vo.js.map