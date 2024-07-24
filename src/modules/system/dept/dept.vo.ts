import { SysDeptEntityVO } from '@/database';
import { ResultVO, TreeNodeVO } from '@/models';

/**
 * 查询部门列表响应传输对象
 */
export class FindDeptListVO extends ResultVO([SysDeptEntityVO]) {}

/**
 * 获取部门树响应传输对象
 */
export class GetDeptTreeVO extends ResultVO([TreeNodeVO]) {}
