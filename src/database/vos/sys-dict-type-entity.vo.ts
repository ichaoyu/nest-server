import { ApiProperty } from '@nestjs/swagger';

import { ENTITY_STATUS } from '@/constants';

import { SysDictTypeEntity } from '../entities';

/**
 * 系统字典类型表响应传输对象
 */
export class SysDictTypeEntityVO implements SysDictTypeEntity {
  @ApiProperty({ description: '主键' })
  id: string;

  @ApiProperty({ description: '字典名称' })
  dictName: string;

  @ApiProperty({ description: '字典类型' })
  dictType: string;

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
