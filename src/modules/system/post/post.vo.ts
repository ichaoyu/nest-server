import { SysPostEntityVO } from '@/database';
import { PageVO, ResultVO } from '@/models';

/**
 * 岗位分页响应传输对象
 */
class PostPageVO extends PageVO(SysPostEntityVO) {}

/**
 * 查询岗位分页响应传输对象
 */
export class FindPostPageVO extends ResultVO(PostPageVO) {}
