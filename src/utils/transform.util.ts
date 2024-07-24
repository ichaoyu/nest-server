import { chunk } from 'lodash-unified';

import { ITreeNode } from '@/interfaces';

type IFieldNames = Omit<ITreeNode, 'children'>;

/**
 * 数据转化工具
 */
export const TransformUtil = {
  /**
   * 列表转树形
   * @static
   * @param {any[]} list 列表
   * @param {IFieldNames} fieldNames 字段名
   */
  listToTree: (list: any[], fieldNames: IFieldNames) => {
    const { title, key, parentKey } = fieldNames;
    const temp = list.map<ITreeNode>((v) => ({
      title: v[title],
      key: v[key],
      parentKey: v[parentKey],
      children: [],
    }));
    const hash = new Map<string, ITreeNode>();
    const tree = [] as ITreeNode[];

    for (const v of temp) {
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
   */
  arrToPage: (arr: any[], pageNum: number, pageSize: number) => {
    return chunk(arr, pageSize)[pageNum - 1];
  },
};
