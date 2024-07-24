import { ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const JWT_OPTIONS: JwtModuleAsyncOptions = {
  global: true,
  useFactory(configService: ConfigService) {
    return configService.get('jwt');
  },
  inject: [ConfigService],
};
