import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

import { ENTITY_SEX, ENTITY_STATUS } from '@/constants';
import { PageDTO } from '@/models';

/**
 * 查找用户分页请求传输对象
 */
export class FindUserPageDTO extends PageDTO {
  @ApiPropertyOptional({ description: '部门主键' })
  @IsOptional()
  deptId: string;

  @ApiPropertyOptional({ description: '账号' })
  @IsOptional()
  userName: string;

  @ApiPropertyOptional({ description: '手机' })
  @IsOptional()
  @IsPhoneNumber('CN', { message: '手机格式不正确' })
  phone: string;

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
 *  添加用户请求传输对象
 */
export class CreateUserDTO {
  @ApiProperty({ description: '昵称' })
  @IsNotEmpty({ message: '昵称不能为空' })
  nickName: string;

  @ApiPropertyOptional({ description: '部门主键' })
  @IsOptional()
  deptId: string;

  @ApiPropertyOptional({ description: '手机' })
  @IsOptional()
  @IsPhoneNumber('CN', { message: '手机格式不正确' })
  phone: string;

  @ApiPropertyOptional({ description: '邮箱' })
  @IsOptional()
  @IsEmail({}, { message: '邮箱格式不正确' })
  email: string;

  @ApiProperty({ description: '账号' })
  @IsNotEmpty({ message: '账号不能为空' })
  userName: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;

  @ApiPropertyOptional({
    description: '性别',
    enum: ENTITY_SEX,
  })
  @IsOptional()
  @IsEnum(ENTITY_SEX, { message: '性别非法值' })
  sex: ENTITY_SEX;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_STATUS,
  })
  @IsOptional()
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;

  @ApiPropertyOptional({
    description: '岗位主键数组',
    type: 'array',
    items: { type: 'string' },
  })
  @IsOptional()
  @IsArray()
  postIds: number[];

  @ApiPropertyOptional({
    description: '角色主键数组',
    type: 'array',
    items: { type: 'string' },
  })
  @IsOptional()
  @IsArray()
  roleIds: number[];

  @ApiPropertyOptional({ description: '备注' })
  @IsOptional()
  remark: string;
}

/**
 * 修改用户请求传输对象
 */
export class UpdateUserDTO extends OmitType(CreateUserDTO, [
  'userName',
  'password',
]) {}

/**
 * 重置密码请求传输对象
 */
export class ResetPasswordDTO {
  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: '密码最少6位' })
  password: string;
}
