import { ApiProperty } from '@nestjs/swagger';
import { IsEqualWith } from '@/shared/validators';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

import { ENTITY_SEX } from '@/constants';

/**
 * 更新当前用户基本信息请求传输对象
 */
export class UpdateCurrentUserBaseDTO {
  @ApiProperty({ description: '用户昵称' })
  nickName: string;

  @ApiProperty({ description: '手机号码' })
  @IsNotEmpty({ message: '手机号码不能为空' })
  @IsPhoneNumber('CN', { message: '手机号码格式不正确' })
  phone: string;

  @ApiProperty({ description: '邮箱地址' })
  @IsNotEmpty({ message: '邮箱地址不能为空' })
  @IsEmail({}, { message: '邮箱地址格式不正确' })
  email: string;

  @ApiProperty({
    description: '性别',
    enum: ENTITY_SEX,
  })
  @IsEnum(ENTITY_SEX, { message: '性别非法值' })
  sex: ENTITY_SEX;
}

/**
 * 更新用户密码请求传输对象
 */
export class UpdateCurrentUserPasswordDTO {
  @ApiProperty({ description: '旧密码' })
  @IsNotEmpty({ message: '旧密码不能为空' })
  oldPassword: string;

  @ApiProperty({ description: '新密码' })
  @IsNotEmpty({ message: '新密码不能为空' })
  @MinLength(6, { message: '新密码最少6位' })
  newPassword: string;

  @ApiProperty({ description: '确认密码' })
  @IsNotEmpty({ message: '确认密码不能为空' })
  @IsEqualWith('newPassword', { message: '两次输入的密码不一致' })
  confirmPassword: string;
}
