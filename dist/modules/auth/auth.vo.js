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
    GetCaptchaVO: function() {
        return GetCaptchaVO;
    },
    LoginVO: function() {
        return LoginVO;
    }
});
const _swagger = require("@nestjs/swagger");
const _models = require("../../models");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let LoginVO = class LoginVO extends (0, _models.ResultVO)(String) {
};
/**
 * 图形验证码响应传输对象
 */ let CaptchaVO = class CaptchaVO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '验证码ID'
    }),
    _ts_metadata("design:type", String)
], CaptchaVO.prototype, "id", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '验证码编码'
    }),
    _ts_metadata("design:type", String)
], CaptchaVO.prototype, "imageBase64", void 0);
let GetCaptchaVO = class GetCaptchaVO extends (0, _models.ResultVO)(CaptchaVO) {
};

//# sourceMappingURL=auth.vo.js.map