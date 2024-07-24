import { SysLoginLogEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 登录日志分页响应传输对象
 */
class LoginLogPageVO extends PageVO(SysLoginLogEntityVO) {}

/**
 * 查询登录日志分页响应传输对象
 */
export class FindLoginLogPageVO extends ResultVO(LoginLogPageVO) {}
