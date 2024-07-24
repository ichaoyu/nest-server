import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

import { ENTITY_STATUS } from '@/constants';
import { PageDTO } from '@/models';

/**
 * 新建字典类型请求传输对象
 */
export class CreateDictTypeDTO {
  @ApiProperty({ description: '字典类型名称' })
  @IsNotEmpty({ message: '字典类型名称不能为空' })
  dictName: string;

  @ApiProperty({ description: '字典类型标识' })
  @IsNotEmpty({ message: '字典类型标识不能为空' })
  dictType: string;

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
 * 更新字典类型请求传输对象
 */
export class UpdateDictTypeDTO extends CreateDictTypeDTO {}

/**
 * 查找字典类型分页请求传输对象
 */
export class FindDictTypePageDTO extends PageDTO {
  @ApiPropertyOptional({ description: '字典类型名称' })
  @IsOptional()
  dictName: string;
}
