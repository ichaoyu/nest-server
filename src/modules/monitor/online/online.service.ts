import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ICacheManager, IOnlineInfo } from '@/interfaces';
import { SharedService } from '@/shared';
import { CacheUtil, TransformUtil } from '@/utils';

import { FindOnlinePageDTO } from './online.dto';

@Injectable()
export class OnlineService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: ICacheManager,
    private configService: ConfigService,
    private sharedService: SharedService,
  ) {}

  async handleFindPage(dto: FindOnlinePageDTO) {
    const { userName, pageNum, pageSize } = dto;
    const prefix = this.configService.get<string>('cache.keyPrefix') || '';
    const tokenKey = CacheUtil.getTokenKey('*');
    const keys = await this.cacheManager.store.keys(`${prefix}${tokenKey}`);
    const keysPage = TransformUtil.arrToPage(keys, pageNum, pageSize);
    const list = [] as IOnlineInfo[];

    if (keysPage) {
      for (let key of keysPage) {
        key = key.replace(prefix, '');
        const item = await this.cacheManager.get<IOnlineInfo>(key);

        if (userName) {
          if (item.userName === userName) {
            list.push(item);
          }
        } else {
          list.push(item);
        }
      }
    }

    return {
      pageNum,
      pageSize,
      total: keys.length,
      list,
    };
  }

  async handleOffline(id: string) {
    const isSoloLogin = await this.sharedService.isSoloLogin();
    const tokenKey = CacheUtil.getTokenKey(id);

    if (isSoloLogin) {
      const { userId } = await this.cacheManager.get<IOnlineInfo>(tokenKey);

      const userKey = CacheUtil.getUserKey(userId);

      await this.cacheManager.del(userKey);
    }

    await this.cacheManager.del(tokenKey);
  }
}
