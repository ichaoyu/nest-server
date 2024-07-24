import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

import { ENTITY_STATUS } from '@/constants';
import { PageDTO } from '@/models';

/**
 * 查找字典分页请求传输对象
 */
export class FindDictDataPageDTO extends PageDTO {
  @ApiProperty({ description: '字典类型标识' })
  @IsNotEmpty({ message: '字典类型标识不能为空' })
  dictType: string;

  @ApiPropertyOptional({ description: '字典数据标签' })
  @IsOptional()
  dictLabel: string;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_STATUS,
  })
  @IsOptional()
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;
}

/**
 * 新建字典请求传输对象
 */
export class CreateDictDataDTO {
  @ApiProperty({ description: '字典类型标识' })
  @IsNotEmpty({ message: '字典类型标识不能为空' })
  dictType: string;

  @ApiProperty({ description: '字典数据标签' })
  @IsNotEmpty({ message: '字典数据标签不能为空' })
  dictLabel: string;

  @ApiProperty({ description: '字典数据键值' })
  @IsNotEmpty({ message: '字典数据键值不能为空' })
  dictValue: string;

  @ApiProperty({ description: '字典数据显示顺序' })
  @IsPositive({ message: '字典数据显示顺序为正整数' })
  dictSort: number;

  @ApiProperty({
    description: '状态',
    enum: ENTITY_STATUS,
  })
  @IsNotEmpty({ message: '状态不能为空' })
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;

  @ApiPropertyOptional({ description: '备注' })
  @IsOptional()
  remark: string;
}

/**
 * 更新字典请求传输对象
 */
export class UpdateDictDataDTO extends CreateDictDataDTO {}
