import { SysMenuEntityVO } from '@/database';
import { ResultVO, TreeNodeVO } from '@/models';

/**
 * 查询菜单列表响应传输对象
 */
export class FindMenuListVO extends ResultVO([SysMenuEntityVO]) {}

/**
 * 获取菜单树响应传输对象
 */
export class GetMenuTreeVO extends ResultVO([TreeNodeVO]) {}
