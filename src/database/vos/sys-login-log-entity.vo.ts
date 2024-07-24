import { ApiProperty } from '@nestjs/swagger';

import { ENTITY_LOGIN_STATUS } from '@/constants';

import { SysLoginLogEntity } from '../entities';

/**
 * 系统登录日志表响应传输对象
 */
export class SysLoginLogEntityVO implements SysLoginLogEntity {
  @ApiProperty({ description: '主键' })
  id: string;

  @ApiProperty({ description: '用户账号' })
  userName: string;

  @ApiProperty({ description: '浏览器' })
  browser: string;

  @ApiProperty({ description: '操作系统' })
  os: string;

  @ApiProperty({
    description: '登录状态（0成功 1失败）',
    enum: ENTITY_LOGIN_STATUS,
  })
  status: ENTITY_LOGIN_STATUS;

  @ApiProperty({ description: '提示消息' })
  msg: string;

  @ApiProperty({ description: '登录 IP' })
  loginIp: string;

  @ApiProperty({ description: '登录地点' })
  loginLocation: string;

  @ApiProperty({ description: '登录时间' })
  loginDate: Date;
}
