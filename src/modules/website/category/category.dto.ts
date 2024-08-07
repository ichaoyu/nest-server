import { PageDTO } from '@/models';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUrl, MaxLength } from 'class-validator';

export class FindCategoryPageDTO extends PageDTO {
  @ApiProperty({ description: '名称' })
  @IsOptional()
  name: string;
}

export class CreateCategoryDTO {
  @ApiProperty({ description: '主键' })
  @IsOptional()
  id: number;

  @ApiProperty({ description: '父级栏目' })
  @IsOptional()
  pid: string;

  @ApiProperty({ description: 'seo标题' })
  @IsOptional()
  seoTitle: string;

  @ApiProperty({ description: 'seo关键字' })
  @IsOptional()
  seoKeywords: string;

  @ApiProperty({ description: 'seo描述' })
  @IsOptional()
  seoDescription: string;

  @ApiProperty({ description: '栏目名称' })
  @IsNotEmpty({ message: '栏目名称不能为空' })
  name: string;

  @ApiProperty({ description: '栏目标识' })
  @IsOptional()
  pinyin: string;

  @ApiProperty({ description: '栏目路径' })
  path: string;

  @ApiProperty({ description: '栏目描述' })
  @IsOptional()
  description: string;

  @ApiProperty({ description: '类型' })
  type: string;

  @ApiProperty({ description: '网址' })
  @IsOptional()
  url: string;

  @ApiProperty({ description: '排序', default: 0 })
  sort: number;

  @ApiProperty({ description: '打开方式' })
  @IsOptional()
  target: string;

  @ApiProperty({ description: '状态' })
  status: string;

  @ApiProperty({ description: '模型id' })
  @IsOptional()
  mid: string;

  @ApiProperty({ description: '列表页模板' })
  @IsOptional()
  listView: string;

  @ApiProperty({ description: '详情页模板' })
  @IsOptional()
  articleView: string;
}

export class UpdateCategoryDTO extends CreateCategoryDTO {}
