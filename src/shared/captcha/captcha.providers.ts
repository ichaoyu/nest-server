import { Provider } from '@nestjs/common';

import {
  CAPTCHA_MERGED_OPTIONS,
  CAPTCHA_OPTIONS,
  defaultOptions,
} from '@/constants';
import { CaptchaOptions, OptionsProviderCaptcha } from '@/interfaces';

export function createCaptchaMergedOptions(): Provider {
  return {
    provide: CAPTCHA_MERGED_OPTIONS,
    useFactory: (options: CaptchaOptions) => {
      return Object.assign({}, defaultOptions, options || {});
    },
    inject: [CAPTCHA_OPTIONS],
  };
}

export function createCaptchaOptions(
  provider: OptionsProviderCaptcha,
): Provider {
  return {
    provide: CAPTCHA_OPTIONS,
    ...provider,
  };
}
