import { SysDictDataEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 字典数据分页响应传输对象
 */
class DictDataPageVO extends PageVO(SysDictDataEntityVO) {}

/**
 * 查询字典数据分页响应传输对象
 */
export class FindDictDataPageVO extends ResultVO(DictDataPageVO) {}

/**
 * 获取字典数据列表响应传输对象
 */
export class GetDictDataListVO extends ResultVO([SysDictDataEntityVO]) {}
