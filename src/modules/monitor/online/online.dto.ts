import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

import { PageDTO } from '@/models';

/**
 *  查找在线分页请求传输数据
 */
export class FindOnlinePageDTO extends PageDTO {
  /**
   * 账号
   */
  @ApiPropertyOptional({ description: '账号' })
  @IsOptional()
  userName: string;
}
