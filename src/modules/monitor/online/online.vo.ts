import { ApiProperty } from '@nestjs/swagger';

import { IOnlineInfo } from '@/interfaces';
import { PageVO, ResultVO } from '@/models';

/**
 * 在线响应传输对象
 */
class OnlineVO implements IOnlineInfo {
  @ApiProperty({ description: '会话编号' })
  tokenId: string;

  @ApiProperty({ description: '用户编号' })
  userId: string;

  @ApiProperty({ description: '用户账号' })
  userName: string;

  @ApiProperty({ description: '部门名称' })
  deptName: string;

  @ApiProperty({ description: '操作系统' })
  os: string;

  @ApiProperty({ description: '浏览器' })
  browser: string;

  @ApiProperty({ description: '登录 IP' })
  loginIp: string;

  @ApiProperty({ description: '登录地点' })
  loginLocation: string;

  @ApiProperty({ description: '登录时间' })
  loginDate: Date;
}

/**
 * 在线分页响应传输对象
 */
class OnlinePageVO extends PageVO(OnlineVO) {}

/**
 * 查询在线分页响应传输对象
 */
export class FindOnlinePageVO extends ResultVO(OnlinePageVO) {}
