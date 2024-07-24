import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, Min } from 'class-validator';

/**
 * 分页查找请求传输对象
 */
export class PageDTO {
  @ApiProperty({ description: '页码', default: 1 })
  @IsPositive({ message: '页码必须是正整数' })
  @Min(1, { message: '页码最小值为 1' })
  pageNum: number;

  @ApiProperty({ description: '页长', default: 15 })
  @IsPositive({ message: '页长必须是正整数' })
  @Min(1, { message: '页长最小值为 1' })
  pageSize: number;
}
