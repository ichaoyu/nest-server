import { WebCategoryEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 分页响应传输对象
 */
class CategoryPageVO extends PageVO(WebCategoryEntityVO) {}

/**
 * 查询分页响应传输对象
 */
export class FindCategoryPageVO extends ResultVO(CategoryPageVO) {}

/**
 * 获取值响应传输对象
 */
export class GetCategoryValueVO extends ResultVO(WebCategoryEntityVO) {}
