import { registerAs } from '@nestjs/config';
import { RedisClientOptions } from '@/interfaces';
import { redisStore } from 'cache-manager-ioredis-yet';

import { EXTRAS } from '@/constants';
import { IConfig } from '@/interfaces';

export default registerAs('', (): IConfig => {
  const sharedRedisOptions: RedisClientOptions = {
    host: '127.0.0.1',
    port: 6379,
    password: '1qazxsw2_CY',
    db: 0,
  };

  return {
    app: {
      port: 7001,
      apiPath: '/api',
    },
    jwt: {
      secret: '$2b$10$R9wXm8rssRiPSVuodOjnFu',
      signOptions: {
        expiresIn: 604800000, // 7 days
      },
    },
    typeorm: {
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'chaoyu',
      password: '1qazxsw_CY',
      database: 'ruoyi',
      autoLoadEntities: true,
    },
    cache: {
      store: redisStore,
      keyPrefix: `{${EXTRAS.APP_NAME}}:{cache}:`,
      ...sharedRedisOptions,
    },
    redis: {
      keyPrefix: `{${EXTRAS.APP_NAME}}:{redis}:`,
      ...sharedRedisOptions,
    },
    bull: {
      prefix: `{${EXTRAS.APP_NAME}}:{bull}`,
      redis: {
        ...sharedRedisOptions,
      },
    },
  };
});
