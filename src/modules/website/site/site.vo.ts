import { WebSiteInfoEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 配置分页响应传输对象
 */
class ConfigPageVO extends PageVO(WebSiteInfoEntityVO) {}

/**
 * 查询所有网站配置响应传输对象
 */
export class FindAllConfigVO extends ResultVO(ConfigPageVO) {}

/**
 * 获取配置值响应传输对象
 */
export class GetSiteInfoVO extends ResultVO(WebSiteInfoEntityVO) {}
