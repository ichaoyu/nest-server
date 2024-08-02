import { WebTagEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 分页响应传输对象
 */
class TagPageVO extends PageVO(WebTagEntityVO) {}

/**
 * 查询分页响应传输对象
 */
export class FindTagPageVO extends ResultVO(TagPageVO) {}

/**
 * 获取值响应传输对象
 */
export class GetTagValueVO extends ResultVO(WebTagEntityVO) {}
