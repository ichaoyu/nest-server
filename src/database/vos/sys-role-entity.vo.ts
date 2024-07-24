import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { ENTITY_DEL_FLAG, ENTITY_STATUS } from '@/constants';

import { SysDeptEntityVO, SysMenuEntityVO, SysUserEntityVO } from '.';
import {
  SysDeptEntity,
  SysMenuEntity,
  SysRoleEntity,
  SysUserEntity,
} from '../entities';

/**
 * 系统角色表关联项
 */
type SysRoleEntityRelations = 'users' | 'depts' | 'menus';

/**
 * 系统角色表响应传输对象
 */
export class SysRoleEntityVO
  implements Omit<SysRoleEntity, SysRoleEntityRelations>
{
  @ApiProperty({ description: '主键' })
  id: string;

  @ApiProperty({ description: '角色名称' })
  roleName: string;

  @ApiProperty({ description: '角色权限字符串' })
  roleKey: string;

  @ApiProperty({ description: '显示顺序' })
  roleSort: number;

  @ApiProperty({
    description: '角色状态（0正常 1停用）',
    enum: ENTITY_STATUS,
  })
  status: ENTITY_STATUS;

  @ApiProperty({
    description: '删除标志（0存在 2删除）',
    enum: ENTITY_DEL_FLAG,
  })
  delFlag: ENTITY_DEL_FLAG;

  @ApiProperty({ description: '备注' })
  remark: string;

  @ApiProperty({ description: '创建者' })
  createBy: string;

  @ApiProperty({ description: '创建时间' })
  createTime: Date;

  @ApiProperty({ description: '更新者' })
  updateBy: string;

  @ApiProperty({ description: '更新时间' })
  updateTime: Date;
}

/**
 * 系统角色表响应传输对象（关联项）
 */
export class SysRoleEntityRelationsVO
  implements Pick<SysRoleEntity, SysRoleEntityRelations>
{
  @ApiPropertyOptional({
    description: '关联用户',
    type: () => [SysUserEntityVO],
  })
  users: SysUserEntity[];

  @ApiPropertyOptional({
    description: '关联部门',
    type: () => [SysDeptEntityVO],
  })
  depts: SysDeptEntity[];

  @ApiPropertyOptional({
    description: '关联菜单',
    type: () => [SysMenuEntityVO],
  })
  menus: SysMenuEntity[];
}
