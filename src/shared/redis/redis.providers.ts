import { InjectionToken, Provider } from '@nestjs/common';

import {
  CreateType,
  OptionsProviderRedis,
  RedisClient,
  RedisClientOptions,
  RedisCluster,
  RedisClusterOptions,
} from '@/interfaces';

export function createRedisClient(
  clientToken: InjectionToken,
  optionsToken: InjectionToken,
): Provider {
  return {
    provide: clientToken,
    useFactory: (options: RedisClientOptions) => {
      return new RedisClient(options);
    },
    inject: [optionsToken],
  };
}

export function createRedisCluster(
  clusterToken: InjectionToken,
  optionsToken: InjectionToken,
): Provider {
  return {
    provide: clusterToken,
    useFactory: (options: RedisClusterOptions) => {
      return new RedisCluster(options.nodes, options.options);
    },
    inject: [optionsToken],
  };
}

export function createRedisCommonOptions(
  optionsToken: InjectionToken,
  provider: OptionsProviderRedis,
): Provider {
  return {
    provide: optionsToken,
    ...provider,
  };
}

export function createFactory(type: CreateType) {
  const factory = {
    client: createRedisClient,
    cluster: createRedisCluster,
  };

  return factory[type];
}
