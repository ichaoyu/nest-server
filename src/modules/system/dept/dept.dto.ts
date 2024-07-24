import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPositive,
} from 'class-validator';

import { ENTITY_STATUS } from '@/constants';

/**
 * 查找部门列表请求传输对象
 */
export class FindDeptListDTO {
  @ApiPropertyOptional({ description: '部门名称' })
  @IsOptional()
  deptName: string;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_STATUS,
  })
  @IsOptional()
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;
}

/**
 * 添加部门请求传输对象
 */
export class CreateDeptDTO {
  @ApiProperty({ description: '上级部门' })
  @IsNotEmpty({ message: '上级部门不能为空' })
  parentId: string;

  @ApiProperty({ description: '部门名称' })
  @IsNotEmpty({ message: '部门名称不能为空' })
  deptName: string;

  @ApiProperty({ description: '显示顺序' })
  @IsPositive({ message: '显示顺序为正整数' })
  orderNum: number;

  @ApiPropertyOptional({ description: '负责人' })
  @IsOptional()
  leader: string;

  @ApiPropertyOptional({ description: '手机' })
  @IsOptional()
  phone: string;

  @ApiPropertyOptional({ description: '邮箱' })
  @IsOptional()
  @IsEmail({}, { message: '邮箱格式不正确' })
  email: string;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_STATUS,
  })
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;
}

/**
 * 更新部门请求传输对象
 */
export class UpdateDeptDTO extends CreateDeptDTO {}
