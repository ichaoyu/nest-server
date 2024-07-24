import { ExcelColumn } from '@/shared/excel';

import { ENTITY_DEL_FLAG, ENTITY_STATUS } from '@/constants';
import { SysRoleEntity } from '@/database';

/**
 * 角色导出序列化
 */
export class RoleExportSerialize implements SysRoleEntity {
  @ExcelColumn({ header: '主键' })
  id: string;

  @ExcelColumn({ header: '角色名称' })
  roleName: string;

  @ExcelColumn({ header: '权限字符' })
  roleKey: string;

  @ExcelColumn({ header: '显示顺序' })
  roleSort: number;

  @ExcelColumn({ header: '状态' })
  status: ENTITY_STATUS;

  delFlag: ENTITY_DEL_FLAG;

  createBy: string;

  @ExcelColumn({ header: '创建时间' })
  createTime: Date;

  updateBy: string;

  updateTime: Date;

  @ExcelColumn({ header: '备注' })
  remark: string;

  users: any[];

  depts: any[];

  menus: any[];

  constructor(partial: any) {
    Object.assign(this, partial);
  }
}
