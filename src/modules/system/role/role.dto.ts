import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  MinLength,
} from 'class-validator';

import { ENTITY_STATUS } from '@/constants';
import { PageDTO } from '@/models';

/**
 * 查找角色分页请求传输对象
 */
export class FindRolePageDTO extends PageDTO {
  @ApiPropertyOptional({ description: '角色名称' })
  @IsOptional()
  roleName: string;

  @ApiPropertyOptional({ description: '权限字符' })
  @IsOptional()
  roleKey: string;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_STATUS,
  })
  @IsOptional()
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;

  @ApiPropertyOptional({ description: '开始时间' })
  @IsOptional()
  @IsDateString({}, { message: '开始时间格式不正确' })
  beginDate: Date;

  @ApiPropertyOptional({ description: '结束时间' })
  @IsOptional()
  @IsDateString({}, { message: '结束时间格式不正确' })
  endDate: Date;
}

/**
 * 查找已分配用户分页请求传输对象
 */
export class FindAllocatedPageDTO extends PageDTO {
  @ApiPropertyOptional({ description: '账户' })
  @IsOptional()
  userName: string;

  @ApiPropertyOptional({ description: '手机' })
  @IsOptional()
  @IsPhoneNumber('CN', { message: '手机格式不正确' })
  phone: string;
}

/**
 * 添加角色请求传输对象
 */
export class CreateRoleDTO {
  @ApiProperty({ description: '角色名称' })
  @IsNotEmpty({ message: '角色名称不能为空' })
  roleName: string;

  @ApiProperty({ description: '权限字符' })
  @IsNotEmpty({ message: '权限字符不能为空' })
  roleKey: string;

  @ApiProperty({ description: '显示顺序' })
  @IsPositive({ message: '显示顺序为正整数' })
  roleSort: number;

  @ApiProperty({
    description: '菜单主键列表',
    type: 'array',
    items: { type: 'string' },
    default: [],
  })
  @IsArray()
  menus: string[];

  @ApiProperty({
    description: '状态',
    enum: ENTITY_STATUS,
    default: '',
  })
  @IsNotEmpty({ message: '状态不能为空' })
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;

  @ApiProperty({ description: '备注', default: '' })
  @IsNotEmpty({ message: '备注不能为空' })
  remark: string;
}

/**
 * 更新角色请求传输对象
 */
export class UpdateRoleDTO extends CreateRoleDTO {}

/**
 * 获取未分配用户分页请求传输对象
 */
export class FindUnallocatedPageDTO extends PageDTO {
  @ApiPropertyOptional({ description: '账号' })
  @IsOptional()
  userName: string;

  @ApiPropertyOptional({ description: '手机' })
  @IsOptional()
  @IsPhoneNumber('CN', { message: '手机格式不正确' })
  phone: string;
}

/**
 * 分配用户请求传输对象
 */
export class AllocateDTO {
  @ApiProperty({
    description: '用户主键数组',
    type: 'array',
    items: { type: 'string' },
  })
  @IsArray()
  @MinLength(1, { message: '用户主键数组不能为空' })
  ids: string[];
}
