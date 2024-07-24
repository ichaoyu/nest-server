/**
 * 树形节点
 */
export interface ITreeNode {
  /**
   * 标题
   */
  title: string;
  /**
   * 标识
   */
  key: string;
  /**
   * 父标识
   */
  parentKey?: string;
  /**
   * 子级
   */
  children?: ITreeNode[];
}
