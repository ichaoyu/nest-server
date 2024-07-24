import { SysConfigEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 配置分页响应传输对象
 */
class ConfigPageVO extends PageVO(SysConfigEntityVO) {}

/**
 * 查询配置分页响应传输对象
 */
export class FindConfigPageVO extends ResultVO(ConfigPageVO) {}

/**
 * 获取配置值响应传输对象
 */
export class GetConfigValueVO extends ResultVO(SysConfigEntityVO) {}
