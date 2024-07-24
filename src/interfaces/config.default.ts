import { BullRootModuleOptions } from '@nestjs/bull';
import { CacheModuleOptions } from '@nestjs/cache-manager';
import { JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RedisClientOptions, RedisClusterOptions } from './redis.interface';
import { CaptchaOptions } from './captcha.interface';

export interface IConfig {
  /**
   * 应用
   */
  app: {
    /**
     * 端口号
     */
    port: number;
    /**
     * 接口路径
     */
    apiPath: string;
    /**
     * 文档路径
     */
    docPath?: string;
  };
  /**
   * JSON Web Token
   */
  jwt?: JwtModuleOptions;
  /**
   * 数据库
   */
  typeorm?: TypeOrmModuleOptions;
  /**
   * 缓存
   */
  cache?: CacheModuleOptions<RedisClientOptions>;
  /**
   * Redis
   */
  redis?: RedisClientOptions | RedisClusterOptions;
  /**
   * 验证码
   */
  captcha?: CaptchaOptions;
  /**
   * 队列
   */
  bull?: BullRootModuleOptions;
}
