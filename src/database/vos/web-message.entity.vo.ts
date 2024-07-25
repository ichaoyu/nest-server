import { ApiProperty } from '@nestjs/swagger';

import { WebMessageEntity } from '../entities';

/**
 * 系统配置表响应传输对象
 */
export class WebMessagekEntityVO implements WebMessageEntity {
  @ApiProperty({ description: '主键' })
  id: string;

  @ApiProperty({ description: '姓名' })
  name: string;

  @ApiProperty({ description: '电话' })
  tel: string;

  @ApiProperty({ description: '公司名称' })
  company: string;

  @ApiProperty({ description: '留言内容' })
  content: string;

  @ApiProperty({ description: '创建时间' })
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  updateTime: Date;
}
