import { ExcelColumn } from '@/shared/excel';

import { ENTITY_BIZ_STATUS, ENTITY_BIZ_TYPE } from '@/constants';
import { SysOperLogEntity } from '@/database';

/**
 * 操作日志导出序列化
 */
export class OperLogExportSerialize implements SysOperLogEntity {
  @ExcelColumn({ header: '主键' })
  id: string;

  @ExcelColumn({ header: '系统模块' })
  title: string;

  @ExcelColumn({ header: '操作类型' })
  bizType: ENTITY_BIZ_TYPE;

  method: string;

  requestMethod: string;

  requestUrl: string;

  requestParams: string;

  requestResult: string;

  @ExcelColumn({ header: '操作人员' })
  operName: string;

  deptName: string;

  @ExcelColumn({ header: '操作地址' })
  operIp: string;

  @ExcelColumn({ header: '操作地点' })
  operLocation: string;

  @ExcelColumn({ header: '状态' })
  status: ENTITY_BIZ_STATUS;

  errorMsg: string;

  @ExcelColumn({ header: '操作日期' })
  operTime: Date;

  @ExcelColumn({ header: '消耗时间' })
  costTime: number;

  constructor(partial: any) {
    Object.assign(this, partial);
  }
}
