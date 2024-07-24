import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CACHES } from '@/constants';
import { ICacheManager, ICacheModel } from '@/interfaces';

import { createCacheModel } from './cache.util';

@Injectable()
export class CacheService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: ICacheManager,
    private configService: ConfigService,
  ) {}

  async handleGetNames() {
    const list = new Array<ICacheModel>();

    list.push(
      createCacheModel({
        cacheName: CACHES.LOGIN_TOKEN_KEY,
        remark: '会话信息',
      }),
      createCacheModel({
        cacheName: CACHES.LOGIN_USER_KEY,
        remark: '用户信息',
      }),
      createCacheModel({
        cacheName: CACHES.SYS_CONFIG_KEY,
        remark: '配置信息',
      }),
      createCacheModel({
        cacheName: CACHES.SYS_DICT_KEY,
        remark: '数据字典',
      }),
    );

    return list;
  }

  async handleGetKeys(name: string) {
    return await this.getKeys(name);
  }

  async handleClearName(name: string) {
    const keys: string[] = await this.getKeys(name);

    for (const key of keys) {
      await this.cacheManager.del(key);
    }
  }

  async handleGetValue(key: string) {
    const cacheValue = await this.cacheManager.get<any>(key);

    const [cacheName, cacheKey] = key.split(':');

    return {
      cacheName,
      cacheKey,
      cacheValue,
    };
  }

  async handleClearKey(key: string) {
    await this.cacheManager.del(key);
  }

  private async getKeys(name: string) {
    const prefix = this.configService.get<string>('cache.keyPrefix') || '';
    let keys = await this.cacheManager.store.keys(`${prefix}${name}:*`);

    keys = keys.map((key) => key.replace(prefix, ''));

    return keys;
  }
}
