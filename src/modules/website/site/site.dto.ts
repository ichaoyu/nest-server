import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
/**
 * 更新配置请求传输对象
 */
export class UpdateConfigDTO {
  @ApiPropertyOptional({ name: 'name', description: '网站名称', example: '' })
  @IsOptional()
  name: string;

  @ApiPropertyOptional({ name: 'domain', description: '网站域名', example: '' })
  @IsOptional()
  domain: string;

  @ApiPropertyOptional({ description: '邮箱', example: '' })
  @IsOptional()
  email: string;

  @ApiPropertyOptional({ description: '微信', example: '' })
  @IsOptional()
  wx: string;

  @ApiPropertyOptional({ description: 'ICP备案号', example: '' })
  @IsOptional()
  icp: string;

  @ApiPropertyOptional({ description: '站点统计代码', example: '' })
  @IsOptional()
  code: string;

  @ApiPropertyOptional({ description: '万能配置', example: '' })
  @IsOptional()
  json: string;

  @ApiPropertyOptional({ description: '页面标题', example: '' })
  @IsOptional()
  title: string;

  @ApiPropertyOptional({ description: '页面关键词', example: '' })
  @IsOptional()
  keywords: string;

  @ApiPropertyOptional({ description: '页面描述', example: '' })
  @IsOptional()
  description: string;

  @ApiPropertyOptional({ description: 'view模板', example: '' })
  @IsOptional()
  template: string;

  @ApiPropertyOptional({ description: '微信小程序appid', example: '' })
  @IsOptional()
  appid: string;

  @ApiPropertyOptional({ description: '微信小程序secret', example: '' })
  @IsOptional()
  secret: string;
}
