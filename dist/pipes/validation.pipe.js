"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ValidationPipe", {
    enumerable: true,
    get: function() {
        return ValidationPipe;
    }
});
const _common = require("@nestjs/common");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ValidationPipe = class ValidationPipe {
    async transform(value, { metatype }) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = (0, _classtransformer.plainToInstance)(metatype, value);
        const errors = await (0, _classvalidator.validate)(object, {
            stopAtFirstError: true
        });
        if (errors.length > 0) {
            const errorMsg = Object.values(errors[0].constraints)[0];
            throw new _common.UnprocessableEntityException(errorMsg);
        }
        return value;
    }
    toValidate(metatype) {
        const types = [
            String,
            Boolean,
            Number,
            Array,
            Object
        ];
        return !types.includes(metatype);
    }
};
ValidationPipe = _ts_decorate([
    (0, _common.Injectable)()
], ValidationPipe);

//# sourceMappingURL=validation.pipe.js.map