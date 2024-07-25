import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { WebArticleEntity, WebTagEntity } from '../entities';
import { WebArticleEntityVO } from '.';

/**
 * 文章标签表关联项
 */
type WebTagEntityRelations = 'article_id';

/**
 * 文章标签表响应传输对象
 */
export class WebTagEntityVO
  implements Omit<WebTagEntity, WebTagEntityRelations>
{
  @ApiProperty({ description: '主键' })
  id: string;

  @ApiProperty({ description: '标签名称' })
  name: string;

  @ApiProperty({ description: '标识' })
  path: string;

  @ApiProperty({ description: '创建时间' })
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  updateTime: Date;
}

/**
 * 文章标签表响应传输对象（关联项）
 */
export class WebTagEntityRelationsVO
  implements Pick<WebTagEntity, WebTagEntityRelations>
{
  @ApiPropertyOptional({
    description: '关联文章',
    type: () => [WebArticleEntityVO],
  })
  article_id: WebArticleEntity[];
}
