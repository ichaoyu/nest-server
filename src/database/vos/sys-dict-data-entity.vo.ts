import { ApiProperty } from '@nestjs/swagger';

import { ENTITY_IS_DEFAULT, ENTITY_STATUS } from '@/constants';

import { SysDictDataEntity } from '../entities';

/**
 * 系统字典数据表响应传输对象
 */
export class SysDictDataEntityVO implements SysDictDataEntity {
  @ApiProperty({ description: '主键' })
  id: string;

  @ApiProperty({ description: '显示顺序' })
  dictSort: number;

  @ApiProperty({ description: '字典标签' })
  dictLabel: string;

  @ApiProperty({ description: '字典键值' })
  dictValue: string;

  @ApiProperty({ description: '字典类型' })
  dictType: string;

  @ApiProperty({
    description: '是否默认（Y是 N否）',
    enum: ENTITY_IS_DEFAULT,
  })
  isDefault: ENTITY_IS_DEFAULT;

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
