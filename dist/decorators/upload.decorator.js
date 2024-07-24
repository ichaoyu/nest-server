"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Files", {
    enumerable: true,
    get: function() {
        return Files;
    }
});
const _nodefs = require("node:fs");
const _nodeos = require("node:os");
const _nodepath = require("node:path");
const _common = require("@nestjs/common");
const defaultConfig = {
    tmpdir: (0, _nodepath.join)((0, _nodeos.tmpdir)(), 'nest-upload-files'),
    preservePath: true,
    limits: {
        fileSize: 102400000
    }
};
const Files = (0, _common.createParamDecorator)(async (data, ctx)=>{
    const request = ctx.switchToHttp().getRequest();
    const config = Object.assign(defaultConfig, data);
    if (!(0, _nodefs.existsSync)(config.tmpdir)) {
        try {
            (0, _nodefs.mkdirSync)(config.tmpdir);
        } catch (error) {
            throw new _common.HttpException(error, _common.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    try {
        return await request.saveRequestFiles(config);
    } catch (error) {
        throw new _common.HttpException(error.message, error.statusCode);
    }
});

//# sourceMappingURL=upload.decorator.js.map