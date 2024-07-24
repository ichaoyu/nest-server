import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

import { ENTITY_CONFIG_TYPE } from '@/constants';
import { PageDTO } from '@/models';

/**
 * 查找配置分页请求传输对象
 */
export class FindConfigPageDTO extends PageDTO {
  /**
   * 参数名称
   */
  @ApiPropertyOptional({ description: '参数名称' })
  @IsOptional()
  configName: string;

  /**
   * 参数键名
   */
  @ApiPropertyOptional({ description: '参数键名' })
  @IsOptional()
  configKey: string;

  /**
   * 系统内置
   */
  @ApiPropertyOptional({
    description: '系统内置',
    enum: ENTITY_CONFIG_TYPE,
  })
  @IsOptional()
  @IsEnum(ENTITY_CONFIG_TYPE, { message: '系统内置非法值' })
  configType: ENTITY_CONFIG_TYPE;

  /**
   * 开始时间
   */
  @ApiPropertyOptional({ description: '开始时间' })
  @IsOptional()
  @IsDateString({}, { message: '开始时间格式不正确' })
  beginDate: Date;

  /**
   * 结束时间
   */
  @ApiPropertyOptional({ description: '结束时间' })
  @IsOptional()
  @IsDateString({}, { message: '结束时间格式不正确' })
  endDate: Date;
}

/**
 * 添加配置请求传输对象
 */
export class CreateConfigDTO {
  @ApiProperty({ description: '参数名称' })
  @IsNotEmpty({ message: '参数名称不能为空' })
  configName: string;

  @ApiProperty({ description: '参数键名' })
  @IsNotEmpty({ message: '参数键名不能为空' })
  configKey: string;

  @ApiProperty({ description: '参数键值' })
  @IsNotEmpty({ message: '参数键值不能为空' })
  configValue: string;

  @ApiPropertyOptional({
    description: '系统内置',
    enum: ENTITY_CONFIG_TYPE,
  })
  @IsEnum(ENTITY_CONFIG_TYPE, { message: '系统内置非法值' })
  configType: ENTITY_CONFIG_TYPE;

  @ApiPropertyOptional({ description: '备注' })
  @IsOptional()
  remark: string;
}

/**
 * 更新配置请求传输对象
 */
export class UpdateConfigDTO extends CreateConfigDTO {}
