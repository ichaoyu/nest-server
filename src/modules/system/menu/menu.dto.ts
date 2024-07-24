import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

import {
  ENTITY_IS_CACHE,
  ENTITY_IS_FRAME,
  ENTITY_MENU_TYPE,
  ENTITY_STATUS,
  ENTITY_VISIBLE,
} from '@/constants';

/**
 * 查询菜单列表请求传输对象
 */
export class FindMenuListDTO {
  @ApiPropertyOptional({ description: '菜单名称' })
  @IsOptional()
  menuName: string;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_STATUS,
  })
  @IsOptional()
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;
}

/**
 * 添加菜单请求传输对象
 */
export class CreateMenuDTO {
  @ApiProperty({ description: '上级菜单' })
  @IsNotEmpty({ message: '上级菜单不能为空' })
  parentId: string;

  @ApiPropertyOptional({ description: '地址' })
  @IsOptional()
  path: string;

  @ApiPropertyOptional({ description: '组件' })
  @IsOptional()
  component: string;

  @ApiPropertyOptional({ description: '重定向地址' })
  @IsOptional()
  redirect: string;

  @ApiPropertyOptional({
    description: '是否为外链',
    enum: ENTITY_IS_FRAME,
    default: ENTITY_IS_FRAME.YES,
  })
  @IsOptional()
  @IsEnum(ENTITY_IS_FRAME, { message: '是否为外链非法值' })
  isFrame: ENTITY_IS_FRAME;

  @ApiProperty({
    description: '是否缓存',
    enum: ENTITY_IS_CACHE,
    default: ENTITY_IS_CACHE.YES,
  })
  @IsNotEmpty({ message: '是否缓存不能为空' })
  @IsEnum(ENTITY_IS_CACHE, { message: '是否缓存非法值' })
  isCache: ENTITY_IS_CACHE;

  @ApiProperty({
    description: '菜单类型',
    enum: ENTITY_MENU_TYPE,
  })
  @IsNotEmpty({ message: '菜单类型不能为空' })
  @IsEnum(ENTITY_MENU_TYPE, { message: '菜单类型非法值' })
  menuType: ENTITY_MENU_TYPE;

  @ApiProperty({ description: '菜单名称' })
  @IsNotEmpty({ message: '菜单名称不能为空' })
  menuName: string;

  @ApiProperty({ description: '显示顺序' })
  @IsPositive({ message: '显示顺序为正整数' })
  orderNum: number;

  @ApiProperty({
    description: '是否可见',
    enum: ENTITY_VISIBLE,
    default: ENTITY_VISIBLE.YES,
  })
  @IsNotEmpty({ message: '是否可见不能为空' })
  @IsEnum(ENTITY_VISIBLE, { message: '是否可见非法值' })
  visible: ENTITY_VISIBLE;

  @ApiPropertyOptional({
    description: '状态',
    enum: ENTITY_STATUS,
  })
  @IsOptional()
  @IsEnum(ENTITY_STATUS, { message: '状态非法值' })
  status: ENTITY_STATUS;

  @ApiPropertyOptional({ description: '权限' })
  @IsOptional()
  perms: string;

  @ApiPropertyOptional({ description: '图标' })
  @IsOptional()
  icon: string;
}

/**
 * 更新菜单请求传输对象
 */
export class UpdateMenuDTO extends CreateMenuDTO {}
