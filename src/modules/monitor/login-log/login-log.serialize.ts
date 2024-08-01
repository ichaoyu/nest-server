import { ExcelColumn } from '@/shared/excel';

import { ENTITY_LOGIN_STATUS } from '@/constants';
import { SysLoginLogEntity } from '@/database';

/**
 * 登录日志导出序列化
 */
export class LoginLogExportSerialize implements SysLoginLogEntity {
  @ExcelColumn({ header: '主键' })
  id: number;

  @ExcelColumn({ header: '用户账号' })
  userName: string;

  @ExcelColumn({ header: '浏览器' })
  browser: string;

  @ExcelColumn({ header: '操作系统' })
  os: string;

  @ExcelColumn({ header: '登录状态' })
  status: ENTITY_LOGIN_STATUS;

  @ExcelColumn({ header: '提示消息' })
  msg: string;

  @ExcelColumn({ header: '登录 IP' })
  loginIp: string;

  @ExcelColumn({ header: '登录地点' })
  loginLocation: string;

  @ExcelColumn({ header: '登录时间' })
  loginDate: Date;

  constructor(partial: any) {
    Object.assign(this, partial);
  }
}
