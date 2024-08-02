import { WebArticleEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 分页响应传输对象
 */
class ArticlePageVO extends PageVO(WebArticleEntityVO) {}

/**
 * 查询分页响应传输对象
 */
export class FindArticlePageVO extends ResultVO(ArticlePageVO) {}

/**
 * 获取值响应传输对象
 */
export class GetArticleValueVO extends ResultVO(WebArticleEntityVO) {}
