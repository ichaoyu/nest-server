import { ApiProperty } from '@nestjs/swagger';

import { WebCategoryEntity } from '../entities';

/**
 * 网站栏目表响应传输对象
 */
export class WebCategoryEntityVO implements WebCategoryEntity {
  @ApiProperty({ description: '主键' })
  id: number;

  @ApiProperty({ description: '父级栏目' })
  pid: string;

  @ApiProperty({ description: 'seo标题' })
  seoTitle: string;

  @ApiProperty({ description: 'seo关键字' })
  seoKeywords: string;

  @ApiProperty({ description: 'seo描述' })
  content: string;

  @ApiProperty({ description: '栏目名称' })
  name: string;

  @ApiProperty({ description: '栏目标识' })
  pinyin: string;

  @ApiProperty({ description: '栏目路径' })
  path: string;

  @ApiProperty({ description: '栏目描述' })
  description: string;

  @ApiProperty({ description: '类型' })
  type: string;

  @ApiProperty({ description: '网址' })
  url: string;

  @ApiProperty({ description: '排序' })
  sort: string;

  @ApiProperty({ description: '打开方式' })
  target: string;

  @ApiProperty({ description: '状态' })
  status: string;

  @ApiProperty({ description: '模型id' })
  mid: string;

  @ApiProperty({ description: '列表页模板' })
  listView: string;

  @ApiProperty({ description: '详情页模板' })
  articleView: string;

  @ApiProperty({ description: '创建时间' })
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  updateTime: Date;
}
