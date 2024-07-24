import { ExcelColumn } from '@/shared/excel';

import { ENTITY_STATUS } from '@/constants';
import { SysPostEntity, SysUserEntity } from '@/database';

/**
 * 岗位导出序列化
 */
export class PostExportSerialize implements SysPostEntity {
  @ExcelColumn({ header: '主键' })
  id: string;

  @ExcelColumn({ header: '岗位编码' })
  postCode: string;

  @ExcelColumn({ header: '岗位名称' })
  postName: string;

  @ExcelColumn({ header: '显示顺序' })
  postSort: number;

  @ExcelColumn({ header: '状态' })
  status: ENTITY_STATUS;

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

  users: SysUserEntity[];

  constructor(partial: any) {
    Object.assign(this, partial);
  }
}
