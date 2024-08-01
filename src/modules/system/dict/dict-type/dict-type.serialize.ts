import { ExcelColumn } from '@/shared/excel';

import { ENTITY_STATUS } from '@/constants';
import { SysDictTypeEntity } from '@/database';

/**
 * 字典类型导出序列化
 */
export class DictTypeExportSerialize implements SysDictTypeEntity {
  @ExcelColumn({ header: '主键' })
  id: number;

  @ExcelColumn({ header: '字典名称' })
  dictName: string;

  @ExcelColumn({ header: '字典类型' })
  dictType: string;

  @ExcelColumn({ header: '状态' })
  status: ENTITY_STATUS;

  createBy: string;

  @ExcelColumn({ header: '创建时间' })
  createTime: Date;

  updateBy: string;

  updateTime: Date;

  @ExcelColumn({ header: '备注' })
  remark: string;

  constructor(partial: any) {
    Object.assign(this, partial);
  }
}
