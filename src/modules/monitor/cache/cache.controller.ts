import { Controller, Delete, Get, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { ENTITY_BIZ_TYPE } from '@/constants';
import { OperLog, Permission } from '@/decorators';

import { CacheService } from './cache.service';
import { GetCacheKeysVO, GetCacheNamesVO, GetCacheValueVO } from './cache.vo';

@ApiBearerAuth()
@ApiTags('缓存接口')
@Controller('/monitor/cache')
export class CacheController {
  constructor(private cacheService: CacheService) {}

  @ApiOperation({ summary: '获取缓存名称列表' })
  @ApiOkResponse({ type: GetCacheNamesVO })
  @Permission('monitor:cache:list')
  @Get('/getNames')
  async getNames() {
    return await this.cacheService.handleGetNames();
  }

  @ApiOperation({ summary: '通过名称获取缓存键名列表' })
  @ApiOkResponse({ type: GetCacheKeysVO })
  @ApiQuery({ name: 'name', description: '缓存名称' })
  @Permission('monitor:cache:list')
  @Get('/getKeys')
  async getKeys(@Query('name') name: string) {
    return await this.cacheService.handleGetKeys(name);
  }

  @ApiOperation({ summary: '通过名称清除缓存' })
  @ApiQuery({ name: 'name', description: '缓存名称' })
  @OperLog({ title: '缓存', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('monitor:cache:list')
  @Delete('/clearName')
  async clearName(@Query('name') name: string) {
    return await this.cacheService.handleClearName(name);
  }

  @ApiOperation({ summary: '通过键名获取缓存值' })
  @ApiOkResponse({ type: GetCacheValueVO })
  @ApiQuery({ name: 'key', description: '缓存键名' })
  @Permission('monitor:cache:list')
  @Get('/value')
  async getValue(@Query('key') key: string) {
    return await this.cacheService.handleGetValue(key);
  }

  @ApiOperation({ summary: '通过键名清除缓存' })
  @ApiQuery({ name: 'key', description: '缓存键名' })
  @OperLog({ title: '缓存', bizType: ENTITY_BIZ_TYPE.CLEAN })
  @Permission('monitor:cache:list')
  @Delete('/clearKey')
  async clearKey(@Query('key') key: string) {
    return await this.cacheService.handleClearKey(key);
  }
}
