import { WebMessageEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 分页响应传输对象
 */
class MessagePageVO extends PageVO(WebMessageEntityVO) {}

/**
 * 查询分页响应传输对象
 */
export class FindMessagePageVO extends ResultVO(MessagePageVO) {}

/**
 * 获取值响应传输对象
 */
export class GetMessageValueVO extends ResultVO(WebMessageEntityVO) {}
