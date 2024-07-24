import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConditionalModule, ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { CaptchaModule } from '@/shared/captcha';
import { ExcelModule } from '@/shared/excel';
import { RedisModule } from '@/shared/redis';

import { EventsModule } from './events';
import { DefaultFilter, NotFoundFilter, ValidationFilter } from './filters';
import { AuthGuard } from './guards';
import {
  CacheKeyInterceptor,
  OperLogInterceptor,
  ResponseInterceptor,
} from './interceptors';
import { IndexModule } from './modules';
import {
  CACHE_OPTIONS,
  CAPTCHA_OPTIONS,
  CONFIG_OPTIONS,
  EXCEL_OPTIONS,
  JWT_OPTIONS,
  LOGGER_OPTIONS,
  REDIS_OPTIONS,
  TYPEORM_OPTIONS,
} from './options';
import { ValidationPipe } from './pipes';
import { QueuesModule } from './queues';
import { SharedModule } from './shared';
import { SysUtil } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG_OPTIONS),
    LoggerModule.forRootAsync(LOGGER_OPTIONS),
    TypeOrmModule.forRootAsync(TYPEORM_OPTIONS),
    JwtModule.registerAsync(JWT_OPTIONS),
    CacheModule.registerAsync(CACHE_OPTIONS),
    CaptchaModule.registerAsync(CAPTCHA_OPTIONS),
    ExcelModule.registerAsync(EXCEL_OPTIONS),
    RedisModule.registerAsync(REDIS_OPTIONS),
    ConditionalModule.registerWhen(EventsModule, () => !SysUtil.isTesting),
    QueuesModule,
    SharedModule,
    IndexModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheKeyInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: OperLogInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: ValidationFilter,
    },
    {
      provide: APP_FILTER,
      useClass: DefaultFilter,
    },
    {
      provide: APP_FILTER,
      useClass: NotFoundFilter,
    },
  ],
})
export class AppModule {}
