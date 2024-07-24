import { SysDictTypeEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 字典类型分页响应传输对象
 */
class DictTypePageVO extends PageVO(SysDictTypeEntityVO) {}

/**
 * 查询字典类型分页响应传输对象
 */
export class FindDictTypePageVO extends ResultVO(DictTypePageVO) {}

/**
 * 获取字典类型响应传输对象
 */
export class GetDictTypeVO extends ResultVO(SysDictTypeEntityVO) {}
