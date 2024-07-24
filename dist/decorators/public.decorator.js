"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Public", {
    enumerable: true,
    get: function() {
        return Public;
    }
});
const _core = require("@nestjs/core");
const Public = _core.Reflector.createDecorator({
    key: 'public:value',
    transform () {
        return true;
    }
});

//# sourceMappingURL=public.decorator.js.map