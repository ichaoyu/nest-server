import { ExcelColumn } from '@/shared/excel';

import { ENTITY_DEL_FLAG, ENTITY_SEX, ENTITY_STATUS } from '@/constants';
import {
  SysDeptEntity,
  SysPostEntity,
  SysRoleEntity,
  SysUserEntity,
} from '@/database';

/**
 * 用户模板序列化
 */
export class UserTemplateSerialize implements SysUserEntity {
  id: string;

  @ExcelColumn({ header: '用户账号' })
  userName: string;

  @ExcelColumn({ header: '用户昵称' })
  nickName: string;

  @ExcelColumn({ header: '邮箱' })
  email: string;

  @ExcelColumn({ header: '手机' })
  phone: string;

  @ExcelColumn({ header: '性别' })
  sex: ENTITY_SEX;

  avatar: string;

  @ExcelColumn({ header: '密码' })
  password: string;

  status: ENTITY_STATUS;

  delFlag: ENTITY_DEL_FLAG;

  loginIp: string;

  loginDate: Date;

  createBy: string;

  createTime: Date;

  updateBy: string;

  updateTime: Date;

  @ExcelColumn({ header: '备注' })
  remark: string;

  deptId: string;

  dept: SysDeptEntity;

  roles: SysRoleEntity[];

  posts: SysPostEntity[];
}

/**
 * 用户导出序列化
 */
export class UserExportSerialize implements SysUserEntity {
  @ExcelColumn({ header: '主键' })
  id: string;

  @ExcelColumn({ header: '用户账号' })
  userName: string;

  @ExcelColumn({ header: '用户昵称' })
  nickName: string;

  @ExcelColumn({ header: '邮箱' })
  email: string;

  @ExcelColumn({ header: '手机' })
  phone: string;

  @ExcelColumn({ header: '性别' })
  sex: ENTITY_SEX;

  avatar: string;

  password: string;

  @ExcelColumn({ header: '状态' })
  status: ENTITY_STATUS;

  delFlag: ENTITY_DEL_FLAG;

  @ExcelColumn({ header: '最后登录IP' })
  loginIp: string;

  @ExcelColumn({ header: '最后登录时间' })
  loginDate: Date;

  @ExcelColumn({ header: '创建者' })
  createBy: string;

  @ExcelColumn({ header: '创建时间' })
  createTime: Date;

  @ExcelColumn({ header: '更新者' })
  updateBy: string;

  @ExcelColumn({ header: '更新时间' })
  updateTime: Date;

  @ExcelColumn({ header: '备注' })
  remark: string;

  deptId: string;

  dept: SysDeptEntity;

  roles: SysRoleEntity[];

  posts: SysPostEntity[];

  constructor(partial: any) {
    Object.assign(this, partial);
  }
}
