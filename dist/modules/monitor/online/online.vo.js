"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FindOnlinePageVO", {
    enumerable: true,
    get: function() {
        return FindOnlinePageVO;
    }
});
const _swagger = require("@nestjs/swagger");
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
/**
 * 在线响应传输对象
 */ let OnlineVO = class OnlineVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '会话编号'
    }),
    _ts_metadata("design:type", String)
], OnlineVO.prototype, "tokenId", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户编号'
    }),
    _ts_metadata("design:type", String)
], OnlineVO.prototype, "userId", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '用户账号'
    }),
    _ts_metadata("design:type", String)
], OnlineVO.prototype, "userName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '部门名称'
    }),
    _ts_metadata("design:type", String)
], OnlineVO.prototype, "deptName", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '操作系统'
    }),
    _ts_metadata("design:type", String)
], OnlineVO.prototype, "os", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '浏览器'
    }),
    _ts_metadata("design:type", String)
], OnlineVO.prototype, "browser", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '登录 IP'
    }),
    _ts_metadata("design:type", String)
], OnlineVO.prototype, "loginIp", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '登录地点'
    }),
    _ts_metadata("design:type", String)
], OnlineVO.prototype, "loginLocation", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '登录时间'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], OnlineVO.prototype, "loginDate", void 0);
/**
 * 在线分页响应传输对象
 */ let OnlinePageVO = class OnlinePageVO extends (0, _models.PageVO)(OnlineVO) {
};
let FindOnlinePageVO = class FindOnlinePageVO extends (0, _models.ResultVO)(OnlinePageVO) {
};

//# sourceMappingURL=online.vo.js.map