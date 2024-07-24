import { Cache } from 'cache-manager';
import { RedisStore } from 'cache-manager-ioredis-yet';

export interface ICacheManager extends Cache<RedisStore> {}
