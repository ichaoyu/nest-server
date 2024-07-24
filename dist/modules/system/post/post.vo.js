"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FindPostPageVO", {
    enumerable: true,
    get: function() {
        return FindPostPageVO;
    }
});
const _database = require("../../../database");
const _models = require("../../../models");
/**
 * 岗位分页响应传输对象
 */ let PostPageVO = class PostPageVO extends (0, _models.PageVO)(_database.SysPostEntityVO) {
};
let FindPostPageVO = class FindPostPageVO extends (0, _models.ResultVO)(PostPageVO) {
};

//# sourceMappingURL=post.vo.js.map