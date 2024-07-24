import { SysOperLogEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 操作日志分页响应传输对象
 */
class OperLogEntityVO extends PageVO(SysOperLogEntityVO) {}

/**
 * 查询操作日志分页响应传输对象
 */
export class FindOperLogPageVO extends ResultVO(OperLogEntityVO) {}
