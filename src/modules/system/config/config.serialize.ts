import { ExcelColumn } from '@/shared/excel';

import { ENTITY_CONFIG_TYPE } from '@/constants';
import { SysConfigEntity } from '@/database';

/**
 * 配置导出序列化
 */
export class ConfigExportSerialize implements SysConfigEntity {
  @ExcelColumn({ header: '主键' })
  id: string;

  @ExcelColumn({ header: '参数名称' })
  configName: string;

  @ExcelColumn({ header: '参数键名' })
  configKey: string;

  @ExcelColumn({ header: '参数键值' })
  configValue: string;

  @ExcelColumn({ header: '系统内置' })
  configType: ENTITY_CONFIG_TYPE;

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
