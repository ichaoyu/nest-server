import { ApiProperty } from '@nestjs/swagger';

import { ICacheModel } from '@/interfaces';
import { ResultVO } from '@/models';

/**
 * 缓存模型响应传输对象
 */
class CacheModelVO implements ICacheModel {
  @ApiProperty({ description: '缓存名称' })
  cacheName: string;

  @ApiProperty({ description: '备注' })
  remark: string;
}

/**
 * 回去缓存名称响应传输对象
 */
export class GetCacheNamesVO extends ResultVO([CacheModelVO]) {}

/**
 * 获取缓存键名响应传输对象
 */
export class GetCacheKeysVO extends ResultVO([String]) {}

/**
 * 缓存键值响应传输对象
 */
class CacheValueVO {
  @ApiProperty({ description: '缓存名称' })
  cacheName: string;

  @ApiProperty({ description: '缓存键名' })
  cacheKey: string;

  @ApiProperty({ description: '缓存键值' })
  cacheValue: string;
}

/**
 * 获取缓存键值响应传输对象
 */
export class GetCacheValueVO extends ResultVO(CacheValueVO) {}
