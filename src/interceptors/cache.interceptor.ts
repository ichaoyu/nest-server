import { CACHE_KEY_METADATA, CacheInterceptor } from '@nestjs/cache-manager';
import { ExecutionContext, Injectable } from '@nestjs/common';

import { CACHES } from '@/constants';
import { IRequest } from '@/interfaces';
import { CacheUtil } from '@/utils';

/**
 * 缓存键名拦截器
 */
@Injectable()
export class CacheKeyInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<IRequest>();
    const cacheKey = this.reflector.get<string>(
      CACHE_KEY_METADATA,
      context.getHandler(),
    );

    if (!cacheKey) {
      return '';
    }

    if (cacheKey === CACHES.SYS_CONFIG_KEY) {
      // @ts-ignore
      return CacheUtil.getConfigKey(request.query.key);
    }

    if (cacheKey === CACHES.SYS_DICT_KEY) {
      // @ts-ignore
      return CacheUtil.getDictKey(request.query.dictType);
    }

    return cacheKey;
  }
}
