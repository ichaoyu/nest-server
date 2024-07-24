import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { ENTITY_STATUS } from '@/constants';

import { SysUserEntityVO } from '.';
import { SysPostEntity, SysUserEntity } from '../entities';

/**
 * 系统岗位表关联项
 */
type SysPostEntityRelations = 'users';

/**
 * 系统岗位表响应传输对象
 */
export class SysPostEntityVO
  implements Omit<SysPostEntity, SysPostEntityRelations>
{
  @ApiProperty({ description: '主键' })
  id: string;

  @ApiProperty({ description: '岗位编码' })
  postCode: string;

  @ApiProperty({ description: '岗位名称' })
  postName: string;

  @ApiProperty({ description: '显示顺序' })
  postSort: number;

  @ApiProperty({
    description: '状态（0正常 1停用）',
    enum: ENTITY_STATUS,
  })
  status: ENTITY_STATUS;

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
 * 系统岗位表响应传输对象（关联项）
 */
export class SysPostEntityRelationsVO
  implements Pick<SysPostEntity, SysPostEntityRelations>
{
  @ApiPropertyOptional({
    description: '关联用户',
    type: () => [SysUserEntityVO],
  })
  users: SysUserEntity[];
}
