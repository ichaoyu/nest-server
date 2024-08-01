import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  ENTITY_IS_CACHE,
  ENTITY_IS_FRAME,
  ENTITY_MENU_TYPE,
  ENTITY_STATUS,
  ENTITY_VISIBLE,
} from '@/constants';

import { SysRoleEntityVO } from '.';
import { SysMenuEntity, SysRoleEntity } from '../entities';

/**
 * 系统菜单表关联项
 */
type SysMenuEntityRelations = 'roles';

/**
 * 系统菜单表响应传输对象
 */
export class SysMenuEntityVO
  implements Omit<SysMenuEntity, SysMenuEntityRelations>
{
  @ApiProperty({ description: '主键' })
  id: number;

  @ApiProperty({ description: '菜单名称' })
  menuName: string;

  @ApiProperty({ description: '上级主键' })
  parentId: string;

  @ApiProperty({ description: '显示顺序' })
  orderNum: number;

  @ApiProperty({ description: '路由地址' })
  path: string;

  @ApiProperty({ description: '组件路径' })
  component: string;

  @ApiProperty({ description: '路由重定向地址' })
  redirect: string;

  @ApiProperty({
    description: '是否为外链（0是 1否）',
    enum: ENTITY_IS_FRAME,
  })
  isFrame: ENTITY_IS_FRAME;

  @ApiProperty({
    description: '是否缓存（0缓存 1不缓存）',
    enum: ENTITY_IS_CACHE,
  })
  isCache: ENTITY_IS_CACHE;

  @ApiProperty({
    description: '菜单类型（M目录 C菜单 F按钮）',
    enum: ENTITY_MENU_TYPE,
  })
  menuType: ENTITY_MENU_TYPE;

  @ApiProperty({
    description: '菜单状态（0显示 1隐藏）',
    enum: ENTITY_VISIBLE,
  })
  visible: ENTITY_VISIBLE;

  @ApiProperty({
    description: '菜单状态（0正常 1停用）',
    enum: ENTITY_STATUS,
  })
  status: ENTITY_STATUS;

  @ApiProperty({ description: '权限标识' })
  perms: string;

  @ApiProperty({ description: '菜单图标' })
  icon: string;

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
 * 系统菜单表响应传输对象（关联项）
 */
export class SysMenuEntityRelationsVO implements Pick<SysMenuEntity, 'roles'> {
  @ApiPropertyOptional({
    description: '关联角色',
    type: () => [SysRoleEntityVO],
  })
  roles: SysRoleEntity[];
}
