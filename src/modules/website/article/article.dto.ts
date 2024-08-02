import { PageDTO } from '@/models';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class FindArticlePageDTO extends PageDTO {
  @ApiProperty({ description: '栏目id' })
  @IsOptional()
  cid: string;

  @ApiProperty({ description: '其他栏目id' })
  @IsOptional()
  subCid: string;

  @ApiProperty({ description: '标题' })
  @IsOptional()
  title: string;

  @ApiProperty({ description: '分类 1头条 2推荐 3轮播 4热门' })
  @IsOptional()
  attr: string;

  @ApiProperty({ description: '来源' })
  @IsOptional()
  source: string;

  @ApiProperty({ description: '作者' })
  @IsOptional()
  author: string;

  @ApiProperty({ description: '状态 0 发布 1不发布' })
  status: string;

  @ApiProperty({ description: '创建时间' })
  @IsOptional()
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  @IsOptional()
  updateTime: Date;
}

export class CreateArticleDTO {
  @ApiProperty({ description: '主键' })
  @IsOptional()
  id: number;

  @ApiProperty({ description: '栏目id' })
  cid: string;

  @ApiProperty({ description: '其他栏目id' })
  subCid: string;

  @ApiProperty({ description: '标题' })
  @IsNotEmpty({ message: '标题不能为空' })
  title: string;

  @ApiProperty({ description: '短标题' })
  @IsOptional()
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
  @IsOptional()
  source: string;

  @ApiProperty({ description: '作者' })
  author: string;

  @ApiProperty({ description: '文章简述' })
  @IsOptional()
  description: string;

  @ApiProperty({ description: '缩略图' })
  @IsOptional()
  img: string;

  @ApiProperty({ description: '文章内容' })
  content: string;

  @ApiProperty({ description: '状态 0 发布 1不发布' })
  status: string;

  @ApiProperty({ description: '浏览量' })
  @IsOptional()
  pv: string;

  @ApiProperty({ description: '外链' })
  @IsOptional()
  link: string;

  @ApiProperty({ description: '创建时间' })
  @IsOptional()
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  @IsOptional()
  updateTime: Date;

  @ApiPropertyOptional({
    description: '标签主键数组',
    type: 'array',
    items: { type: 'string' },
  })
  @IsOptional()
  @IsArray()
  tagIds: number[];
}

export class UpdateArticleDto extends CreateArticleDTO {}
