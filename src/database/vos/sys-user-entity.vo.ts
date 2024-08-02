import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { ENTITY_DEL_FLAG, ENTITY_SEX, ENTITY_STATUS } from '@/constants';

import { SysDeptEntityVO, SysPostEntityVO, SysRoleEntityVO } from '.';
import {
  SysDeptEntity,
  SysPostEntity,
  SysRoleEntity,
  SysUserEntity,
} from '../entities';

/**
 * 系统用户表关联项
 */
type SysUserEntityRelations = 'dept' | 'posts' | 'roles';

/**
 * 系统用户表响应传输对象
 */
export class SysUserEntityVO
  implements Omit<SysUserEntity, SysUserEntityRelations>
{
  @ApiProperty({ description: '主键' })
  id: number;

  @ApiProperty({ description: '用户账号' })
  userName: string;

  @ApiProperty({ description: '用户昵称' })
  nickName: string;

  @ApiProperty({ description: '用户邮箱' })
  email: string;

  @ApiProperty({ description: '手机号码' })
  phone: string;

  @ApiProperty({
    description: '用户性别（0男 1女 2未知）',
    enum: ENTITY_SEX,
  })
  sex: ENTITY_SEX;

  @ApiProperty({ description: '头像地址' })
  avatar: string;

  @ApiProperty({ description: '用户密码' })
  password: string;

  @ApiProperty({
    description: '状态（0正常 1停用）',
    enum: ENTITY_STATUS,
  })
  status: ENTITY_STATUS;

  @ApiProperty({
    description: '删除标志（0存在 2删除）',
    enum: ENTITY_DEL_FLAG,
  })
  delFlag: ENTITY_DEL_FLAG;

  @ApiProperty({ description: '最后登录 IP' })
  loginIp: string;

  @ApiProperty({ description: '最后登录时间' })
  loginDate: Date;

  @ApiProperty({ description: '备注' })
  remark: string;

  @ApiProperty({ description: '创建者' })
  createBy: string;

  @ApiProperty({ description: '创建时间' })
  createTime: Date;

  @ApiProperty({ description: '更新者' })
  updateBy: string;

  @ApiProperty({ description: '更新时间' })
  updateTime: Date;
}

/**
 * 系统用户表响应传输对象（关联项）
 */
export class SysUserEntityRelationsVO
  implements Pick<SysUserEntity, SysUserEntityRelations>
{
  @ApiProperty({ description: '部门主键' })
  deptId: number;

  @ApiPropertyOptional({
    description: '关联部门',
    type: () => SysDeptEntityVO,
  })
  dept: SysDeptEntity;

  @ApiPropertyOptional({
    description: '关联角色',
    type: () => [SysRoleEntityVO],
  })
  roles: SysRoleEntity[];

  @ApiPropertyOptional({
    description: '关联岗位',
    type: () => [SysPostEntityVO],
  })
  posts: SysPostEntity[];
}
