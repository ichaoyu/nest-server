import { ExcelColumn } from '@/shared/excel';

import { ENTITY_IS_DEFAULT, ENTITY_STATUS } from '@/constants';
import { SysDictDataEntity } from '@/database';

/**
 * 字典数据导出序列化
 */
export class DictDataExportSerialize implements SysDictDataEntity {
  @ExcelColumn({ header: '主键' })
  id: number;

  @ExcelColumn({ header: '显示顺序' })
  dictSort: number;

  @ExcelColumn({ header: '字典标签' })
  dictLabel: string;

  @ExcelColumn({ header: '字典键值' })
  dictValue: string;

  dictType: string;

  isDefault: ENTITY_IS_DEFAULT;

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
