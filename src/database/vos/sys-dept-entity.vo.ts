import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { ENTITY_DEL_FLAG, ENTITY_STATUS } from '@/constants';

import { SysRoleEntityVO } from '.';
import { SysDeptEntity, SysRoleEntity } from '../entities';

/**
 * 系统部门表关联项
 */
type SysDeptEntityRelations = 'roles';

/**
 * 系统部门表响应传输对象
 */
export class SysDeptEntityVO
  implements Omit<SysDeptEntity, SysDeptEntityRelations>
{
  @ApiProperty({ description: '主键' })
  id: number;

  @ApiProperty({ description: '上级主键' })
  parentId: string;

  @ApiProperty({ description: '祖级列表' })
  ancestors: string;

  @ApiProperty({ description: '部门名称' })
  deptName: string;

  @ApiProperty({ description: '显示顺序' })
  orderNum: number;

  @ApiProperty({ description: '负责人' })
  leader: string;

  @ApiProperty({ description: '联系电话' })
  phone: string;

  @ApiProperty({ description: '邮箱' })
  email: string;

  @ApiProperty({
    description: '部门状态（0正常 1停用）',
    enum: ENTITY_STATUS,
  })
  status: ENTITY_STATUS;

  @ApiProperty({
    description: '删除标志（0存在 2删除）',
    enum: ENTITY_DEL_FLAG,
  })
  delFlag: ENTITY_DEL_FLAG;

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
 * 系统部门表响应传输对象（关联项）
 */
export class SysDeptEntityRelationsVO
  implements Pick<SysDeptEntity, SysDeptEntityRelations>
{
  @ApiPropertyOptional({
    description: '关联角色',
    type: () => [SysRoleEntityVO],
  })
  roles: SysRoleEntity[];
}
