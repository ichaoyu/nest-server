import { WebFlinkEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 友链分页响应传输对象
 */
class FlinkPageVO extends PageVO(WebFlinkEntityVO) {}

/**
 * 查询友链分页响应传输对象
 */
export class FindFlinkPageVO extends ResultVO(FlinkPageVO) {}

/**
 * 获取友链值响应传输对象
 */
export class GetFlinkValueVO extends ResultVO(WebFlinkEntityVO) {}
