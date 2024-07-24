import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const TYPEORM_OPTIONS: TypeOrmModuleAsyncOptions = {
  useFactory(configService: ConfigService) {
    return configService.get('typeorm');
  },
  inject: [ConfigService],
};
