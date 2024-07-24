import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';

import { SysUserEntityVO } from '@/database';
import { IUserMenu } from '@/interfaces';
import { ResultVO } from '@/models';

type IMeta = IUserMenu['meta'];

/**
 * 元信息响应传输对象
 */
class MetaVO implements IMeta {
  @ApiProperty({ description: '标题' })
  title: string;

  @ApiProperty({ description: '图标' })
  icon: string;

  @ApiProperty({ description: '排序' })
  sort: number;

  @ApiProperty({ description: '是否隐藏' })
  hidden: boolean;

  @ApiProperty({ description: '是否缓存' })
  noCache: boolean;

  @ApiProperty({ description: '是否一直显示' })
  alwaysShow: boolean;
}

/**
 * 用户菜单响应传输对象
 */
class UserMenuVO implements IUserMenu {
  @ApiProperty({ description: '标识' })
  key: string;

  @ApiProperty({ description: '父级标识' })
  parentKey: string;

  @ApiProperty({ description: '路由地址' })
  path: string;

  @ApiProperty({ description: '组件名称' })
  name: string;

  @ApiProperty({ description: '跳转地址' })
  redirect: string;

  @ApiProperty({ description: '组件路径' })
  component: string;

  @ApiProperty({ description: '组件路径' })
  componentName: string;

  @ApiProperty({ description: '元信息', type: MetaVO })
  meta: IMeta;

  @ApiProperty({
    description: '子菜单',
    type: 'array',
    items: { type: 'object' },
  })
  children: IUserMenu[];
}

/**
 * 当前用户信息响应传输对象
 */
@ApiExtraModels(UserMenuVO)
class CurrentUserInfoVO {
  @ApiProperty({
    description: '菜单列表',
    type: 'array',
    items: { $ref: getSchemaPath(UserMenuVO) },
  })
  menus: any;

  @ApiProperty({
    description: '角色列表',
    type: 'array',
    items: { type: 'string' },
  })
  roles: string[];

  @ApiProperty({
    description: '权限列表',
    type: 'array',
    items: { type: 'string' },
  })
  permissions: string[];

  @ApiProperty({ description: '当前用户信息', type: SysUserEntityVO })
  user: SysUserEntityVO;
}

/**
 * 获取当前用户信息响应传输对象
 */
export class GetCurrentUserInfoVO extends ResultVO(CurrentUserInfoVO) {}

/**
 * 当前用户配置响应传输对象
 */
class CurrentUserProfileVO extends SysUserEntityVO {
  @ApiProperty({ description: '岗位组' })
  postGroup: string;

  @ApiProperty({ description: '角色组' })
  roleGroup: string;

  @ApiProperty({ description: '部门名称' })
  deptName: string;
}

/**
 * 获取当前用户配置响应传输对象
 */
export class GetCurrentUserProfileVO extends ResultVO(CurrentUserProfileVO) {}
