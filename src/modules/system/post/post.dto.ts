import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

import { ENTITY_STATUS } from '@/constants';
import { PageDTO } from '@/models';

/**
 * 查找岗位分页请求传输对象
 */
export class FindPostPageDTO extends PageDTO {
  @ApiPropertyOptional({ description: '岗位编码', default: '' })
  @IsOptional()
  postCode: string;

  @ApiPropertyOptional({ description: '岗位名称', default: '' })
  @IsOptional()
  postName: string;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_STATUS,
    default: '',
  })
  @IsOptional()
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;
}

/**
 * 添加岗位请求传输对象
 */
export class CreatePostDTO {
  @ApiProperty({ description: '岗位名称' })
  @IsNotEmpty({ message: '岗位名称不能为空' })
  postName: string;

  @ApiProperty({ description: '岗位编码' })
  @IsNotEmpty({ message: '岗位编码不能为空' })
  postCode: string;

  @ApiProperty({ description: '岗位顺序' })
  @IsPositive({ message: '岗位顺序为正整数' })
  postSort: number;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_STATUS,
  })
  @IsOptional()
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;

  @ApiPropertyOptional({ description: '备注' })
  @IsOptional()
  remark: string;
}

/**
 *  更新岗位请求传输对象
 */
export class UpdatePostDTO extends CreatePostDTO {}
