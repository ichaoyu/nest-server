import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional } from 'class-validator';

import { ENTITY_BIZ_STATUS, ENTITY_BIZ_TYPE } from '@/constants';
import { PageDTO } from '@/models';

/**
 *  查找操作日志分页请求传输对象
 */
export class FindOperLogPageDTO extends PageDTO {
  @ApiPropertyOptional({ description: '操作地址' })
  @IsOptional()
  operIp: string;

  @ApiPropertyOptional({ description: '操作模块' })
  @IsOptional()
  title: string;

  @ApiPropertyOptional({ description: '操作人员' })
  @IsOptional()
  operName: string;

  @ApiPropertyOptional({ description: '业务类型', enum: ENTITY_BIZ_TYPE })
  @IsOptional()
  @IsEnum(ENTITY_BIZ_TYPE, { message: '业务类型非法值' })
  bizType: ENTITY_BIZ_TYPE;

  @ApiPropertyOptional({ description: '状态', enum: ENTITY_BIZ_STATUS })
  @IsOptional()
  @IsEnum(ENTITY_BIZ_STATUS, { message: '状态非法值' })
  status: ENTITY_BIZ_STATUS;

  @ApiPropertyOptional({ description: '开始时间' })
  @IsOptional()
  @IsDateString({}, { message: '开始时间格式不正确' })
  beginDate: Date;

  @ApiPropertyOptional({ description: '结束时间' })
  @IsOptional()
  @IsDateString({}, { message: '结束时间格式不正确' })
  endDate: Date;
}
