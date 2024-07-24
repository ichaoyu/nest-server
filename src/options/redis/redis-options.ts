import { ConfigService } from '@nestjs/config';
import { RedisModuleOptions } from '@/interfaces';

import { REDIS_CLIENT, REDIS_CLIENT_OPTIONS } from '@/constants';

export const REDIS_OPTIONS: RedisModuleOptions = {
  global: true,
  createType: 'client',
  clientToken: REDIS_CLIENT,
  optionsToken: REDIS_CLIENT_OPTIONS,
  optionsProvider: {
    useFactory: (configService: ConfigService) => {
      return configService.get('redis');
    },
    inject: [ConfigService],
  },
};
