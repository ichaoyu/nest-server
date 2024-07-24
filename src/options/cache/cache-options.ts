import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';

export const CACHE_OPTIONS: CacheModuleAsyncOptions = {
  isGlobal: true,
  useFactory(configService: ConfigService) {
    return configService.get('cache');
  },
  inject: [ConfigService],
};
