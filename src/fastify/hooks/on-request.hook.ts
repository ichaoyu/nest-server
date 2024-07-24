import { EXTRAS } from '@/constants';
import { IRequest, IResponse } from '@/interfaces';
import { HashUtil } from '@/utils';

/**
 * 请求拦截钩子
 */
export async function FastifyOnRequestHook(req: IRequest, res: IResponse) {
  // 对匹配的路径做鉴权
  if ([EXTRAS.QUEUES_PATH].includes(req.originalUrl)) {
    const oldVal = req.cookies[EXTRAS.BASIC_AUTH_KEY] || '';
    const isMatch = await HashUtil.compare(EXTRAS.BASIC_AUTH_RAW, oldVal);

    if (!isMatch && !req.originalUrl.includes(EXTRAS.BASIC_AUTH_PATH)) {
      res.redirect(302, `${EXTRAS.BASIC_AUTH_PATH}?url=${req.originalUrl}`);
    }
  }

  return;
}
