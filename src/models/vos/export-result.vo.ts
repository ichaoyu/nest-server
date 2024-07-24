import { ApiProperty } from '@nestjs/swagger';

import { ResultVO } from './result.vo';

/**
 * 导出响应对象
 */
class ExportVO {
  @ApiProperty({ description: '响应头' })
  headers: Record<string, any>;

  @ApiProperty({ description: '响应体' })
  body: Buffer;
}

/**
 * 导出结果响应对象
 */
export class ExportResultVO extends ResultVO(ExportVO) {}
