import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { WebArticleEntity, type WebTagEntity } from '../entities';
import { WebTagEntityVO } from '.';

/**
 * 网站文章表关联项
 */
type WebArticleEntityRelations = 'tags';

/**
 * 网站文章表响应传输对象
 */
export class WebArticleEntityVO
  implements Omit<WebArticleEntity, WebArticleEntityRelations>
{
  @ApiProperty({ description: '主键' })
  id: number;

  @ApiProperty({ description: '栏目id' })
  cid: string;

  @ApiProperty({ description: '其他栏目id' })
  subCid: string;

  @ApiProperty({ description: '标题' })
  title: string;

  @ApiProperty({ description: '短标题' })
  short_title: string;

  @ApiProperty({ description: '分类 1头条 2推荐 3轮播 4热门' })
  attr: string;

  @ApiProperty({ description: 'seo标题' })
  seoTitle: string;

  @ApiProperty({ description: 'seo关键字' })
  seoKeywords: string;

  @ApiProperty({ description: 'seo描述' })
  seo_description: string;

  @ApiProperty({ description: '来源' })
  source: string;

  @ApiProperty({ description: '作者' })
  author: string;

  @ApiProperty({ description: '文章简述' })
  description: string;

  @ApiProperty({ description: '缩略图' })
  img: string;

  @ApiProperty({ description: '文章内容' })
  content: string;

  @ApiProperty({ description: '状态 0 发布 1不发布' })
  status: string;

  @ApiProperty({ description: '浏览量' })
  pv: string;

  @ApiProperty({ description: '外链' })
  link: string;

  @ApiProperty({ description: '创建时间' })
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  updateTime: Date;
}

/**
 * 网站文章表响应传输对象（关联项）
 */
export class WebArticleEntityRelationsVO
  implements Pick<WebArticleEntity, WebArticleEntityRelations>
{
  @ApiPropertyOptional({
    description: '关联标签',
    type: () => [WebTagEntityVO],
  })
  tags: WebTagEntity[];
}
