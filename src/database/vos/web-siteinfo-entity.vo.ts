import { ApiProperty } from '@nestjs/swagger';

import { WebSiteInfoEntity } from '../entities';

/**
 * 系统配置表响应传输对象
 */
export class WebSiteInfoEntityVO implements WebSiteInfoEntity {
  @ApiProperty({ description: '主键' })
  id: string;

  @ApiProperty({ description: '网站名称' })
  name: string;

  @ApiProperty({ description: '网站域名' })
  domain: string;

  @ApiProperty({ description: '邮箱' })
  email: string;

  @ApiProperty({ description: '微信' })
  wx: string;

  @ApiProperty({ description: 'ICP备案号' })
  icp: string;

  @ApiProperty({ description: '站点统计代码' })
  code: string;

  @ApiProperty({ description: '万能配置' })
  json: string;

  @ApiProperty({ description: '页面标题' })
  title: string;

  @ApiProperty({ description: '页面关键词' })
  keywords: string;

  @ApiProperty({ description: '页面描述' })
  description: string;

  @ApiProperty({ description: 'view模板' })
  template: string;

  @ApiProperty({ description: '微信小程序appid' })
  appid: string;

  @ApiProperty({ description: '微信小程序secret' })
  secret: string;

  @ApiProperty({ description: '更新者' })
  updateBy: string;

  @ApiProperty({ description: '创建时间' })
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  updateTime: Date;
}
