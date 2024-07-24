import { IntersectionType, PickType } from '@nestjs/swagger';

import {
  SysRoleEntityRelationsVO,
  SysRoleEntityVO,
  SysUserEntityRelationsVO,
  SysUserEntityVO,
} from '@/database';
import { PageVO, ResultVO } from '@/models';

class RolePageItem extends IntersectionType(
  SysRoleEntityVO,
  PickType(SysRoleEntityRelationsVO, ['menus']),
) {}

class RolePageVO extends PageVO(RolePageItem) {}

/**
 * 查询角色分页响应传输对象
 */
export class FindRolePageVO extends ResultVO(RolePageVO) {}

class AllocatedPageItem extends IntersectionType(
  SysUserEntityVO,
  PickType(SysUserEntityRelationsVO, ['roles']),
) {}

class AllocatedPageVO extends PageVO(AllocatedPageItem) {}

/**
 * 获取已分配角色分页响应传输对象
 */
export class FindAllocatedPageVO extends ResultVO(AllocatedPageVO) {}

class UnallocatedPageVO extends PageVO(SysUserEntityVO) {}

/**
 * 获取未分配角色分页响应传输对象
 */
export class FindUnallocatedPageVO extends ResultVO(UnallocatedPageVO) {}
