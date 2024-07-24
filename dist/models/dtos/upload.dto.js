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
    UploadFileDTO: function() {
        return UploadFileDTO;
    },
    UploadFilesDTO: function() {
        return UploadFilesDTO;
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
let UploadFileDTO = class UploadFileDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        type: 'string',
        format: 'binary'
    }),
    _ts_metadata("design:type", Object)
], UploadFileDTO.prototype, "file", void 0);
let UploadFilesDTO = class UploadFilesDTO {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        type: 'array',
        items: {
            type: 'string',
            format: 'binary'
        }
    }),
    _ts_metadata("design:type", Array)
], UploadFilesDTO.prototype, "file", void 0);

//# sourceMappingURL=upload.dto.js.map