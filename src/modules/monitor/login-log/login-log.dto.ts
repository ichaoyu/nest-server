import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional } from 'class-validator';

import { ENTITY_LOGIN_STATUS } from '@/constants';
import { PageDTO } from '@/models';

/**
 *  查找登录日志分页请求传输对象
 */
export class FindLoginLogPageDTO extends PageDTO {
  @ApiPropertyOptional({ description: '账号' })
  @IsOptional()
  userName: string;

  @ApiPropertyOptional({ description: '登录 IP' })
  @IsOptional()
  loginIp: string;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_LOGIN_STATUS,
  })
  @IsOptional()
  @IsEnum(ENTITY_LOGIN_STATUS, { message: '状态非法值' })
  status: ENTITY_LOGIN_STATUS;

  @ApiPropertyOptional({ description: '开始时间' })
  @IsOptional()
  @IsDateString({}, { message: '开始时间格式不正确' })
  beginDate: Date;

  @ApiPropertyOptional({ description: '结束时间' })
  @IsOptional()
  @IsDateString({}, { message: '结束时间格式不正确' })
  endDate: Date;
}
