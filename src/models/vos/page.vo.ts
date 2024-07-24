import { ApiProperty } from '@nestjs/swagger';

/**
 * 分页响应对象
 * @param {T} classRef 列表类
 */
export function PageVO<T>(classRef: T) {
  class Page {
    @ApiProperty({ description: '页码' })
    pageNum: number;

    @ApiProperty({ description: '页长' })
    pageSize: number;

    @ApiProperty({ description: '总数' })
    total: number;

    @ApiProperty({ description: '列表', type: [classRef] })
    list: T[];
  }
  return Page;
}
