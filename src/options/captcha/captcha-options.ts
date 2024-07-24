import { CaptchaModuleOptions } from '@/interfaces';
import { ConfigService } from '@nestjs/config';

export const CAPTCHA_OPTIONS: CaptchaModuleOptions = {
  global: true,
  optionsProvider: {
    useFactory(configService: ConfigService) {
      return configService.get('captcha');
    },
    inject: [ConfigService],
  },
};
