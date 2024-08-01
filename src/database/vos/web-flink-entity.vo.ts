import { ApiProperty } from '@nestjs/swagger';

import { WebFlinkEntity } from '../entities';

/**
 * 系统配置表响应传输对象
 */
export class WebFlinkEntityVO implements WebFlinkEntity {
  @ApiProperty({ description: '主键' })
  id: number;

  @ApiProperty({ description: '链接名称' })
  title: string;

  @ApiProperty({ description: '链接地址' })
  link: string;

  @ApiProperty({ description: '排序' })
  sort: string;

  @ApiProperty({ description: '备注' })
  remark: string;

  @ApiProperty({ description: '创建时间' })
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  updateTime: Date;
}
