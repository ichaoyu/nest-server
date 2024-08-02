import { ApiProperty, IntersectionType, PickType } from '@nestjs/swagger';

import {
  SysPostEntityVO,
  SysRoleEntityVO,
  SysUserEntityRelationsVO,
  SysUserEntityVO,
} from '@/database';
import { PageVO, ResultVO } from '@/models';

class UserPageItem extends IntersectionType(
  SysUserEntityVO,
  PickType(SysUserEntityRelationsVO, ['dept']),
) {}

class UserPageVO extends PageVO(UserPageItem) {}

/**
 * 获取用户分页响应传输对象
 */
export class FindUserPageVO extends ResultVO(UserPageVO) {}

/**
 * 用户表单数据响应传输对象
 */
class UserFormDataVO {
  @ApiProperty({ description: '岗位列表', type: [SysPostEntityVO] })
  posts: any[];

  @ApiProperty({ description: '角色列表', type: [SysRoleEntityVO] })
  roles: any[];

  @ApiProperty({
    description: '岗位主键列表',
    type: 'array',
    items: { type: 'string' },
  })
  postIds?: number[];

  @ApiProperty({
    description: '角色主键列表',
    type: 'array',
    items: { type: 'string' },
  })
  roleIds?: number[];
}

/**
 * 获取用户添加表单数据响应传输对象
 */
export class GetUserAddFormDataVO extends ResultVO(UserFormDataVO) {}

/**
 * 获取用户编辑表单数据响应传输对象
 */
export class GetUserEditFormDataVO extends ResultVO(UserFormDataVO) {}

/**
 * 用户模板响应传输对象
 */
class UserTemplateVO {
  @ApiProperty({ description: '成功数量' })
  success: number;

  @ApiProperty({ description: '失败数量' })
  fail: number;
}

/**
 * 导入用户模板响应传输对象
 */
export class ImportUserTemplateVO extends ResultVO(UserTemplateVO) {}
