"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TransformUtil", {
    enumerable: true,
    get: function() {
        return TransformUtil;
    }
});
const _lodashunified = require("lodash-unified");
const TransformUtil = {
    /**
   * 列表转树形
   * @static
   * @param {any[]} list 列表
   * @param {IFieldNames} fieldNames 字段名
   */ listToTree: (list, fieldNames)=>{
        const { title, key, parentKey } = fieldNames;
        const temp = list.map((v)=>({
                title: v[title],
                key: v[key],
                parentKey: v[parentKey],
                children: []
            }));
        const hash = new Map();
        const tree = [];
        for (const v of temp){
            hash.set(v.key, v);
            const parent = hash.get(v.parentKey);
            if (!parent) {
                tree.push(v);
            } else {
                parent.children.push(v);
            }
        }
        return tree;
    },
    /**
   * 数组转分页
   * @param {any[]} arr
   * @param {number} pageNum
   * @param {number} pageSize
   */ arrToPage: (arr, pageNum, pageSize)=>{
        return (0, _lodashunified.chunk)(arr, pageSize)[pageNum - 1];
    }
};

//# sourceMappingURL=transform.util.js.map