import { registerAs } from '@nestjs/config';
import { redisStore } from 'cache-manager-ioredis-yet';
import { EXTRAS } from '@/constants';
import { IConfig, RedisClientOptions } from '@/interfaces';

export default registerAs('', (): IConfig => {
  const sharedRedisOptions: RedisClientOptions = {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
  };

  return {
    app: {
      port: 7001,
      apiPath: '/api',
      docPath: '/swagger-ui',
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
      username: 'root',
      password: '1qazxsw2',
      database: 'nest-service',
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
      redis: {
        keyPrefix: `{${EXTRAS.APP_NAME}}:{bull}`,
        ...sharedRedisOptions,
      },
    },
  };
});
