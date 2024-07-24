import { ApiProperty } from '@nestjs/swagger';

import { ENTITY_CONFIG_TYPE } from '@/constants';

import { SysConfigEntity } from '../entities';

/**
 * 系统配置表响应传输对象
 */
export class SysConfigEntityVO implements SysConfigEntity {
  @ApiProperty({ description: '主键' })
  id: string;

  @ApiProperty({ description: '参数名称' })
  configName: string;

  @ApiProperty({ description: '参数键名' })
  configKey: string;

  @ApiProperty({ description: '参数键值' })
  configValue: string;

  @ApiProperty({
    description: '系统内置（Y是 N否）',
    enum: ENTITY_CONFIG_TYPE,
  })
  configType: ENTITY_CONFIG_TYPE;

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
