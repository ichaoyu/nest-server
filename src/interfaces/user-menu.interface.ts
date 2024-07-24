/**
 * 用户菜单
 */
export interface IUserMenu {
  /**
   * 标识
   */
  key: string;
  /**
   * 父级标识
   */
  parentKey: string;
  /**
   * 路由地址
   */
  path: string;
  /**
   * 组件名称
   */
  name: string;
  /**
   * 跳转地址
   */
  redirect: string;
  /**
   * 组件路径
   */
  component: string;
  /**
   * 组件名称
   */
  componentName: string;
  /**
   * 元信息
   */
  meta: {
    /**
     * 标题
     */
    title: string;
    /**
     * 图标
     */
    icon: string;
    /**
     * 排序
     */
    sort: number;
    /**
     * 是否隐藏
     */
    hidden: boolean;
    /**
     * 是否缓存
     */
    noCache: boolean;
    /**
     * 是否一直显示
     */
    alwaysShow: boolean;
  };
  /**
   * 子菜单
   */
  children: IUserMenu[];
}
