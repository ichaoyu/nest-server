"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DelDTO", {
    enumerable: true,
    get: function() {
        return DelDTO;
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
let DelDTO = class DelDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: '主键数组',
        type: 'array',
        items: {
            type: 'string'
        }
    }),
    (0, _classvalidator.ArrayNotEmpty)({
        message: '主键数组不能为空'
    }),
    _ts_metadata("design:type", Array)
], DelDTO.prototype, "ids", void 0);

//# sourceMappingURL=del.dto.js.map