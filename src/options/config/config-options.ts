import { ConfigModuleOptions } from '@nestjs/config';

import configuration from '@/configs';

export const CONFIG_OPTIONS: ConfigModuleOptions = {
  isGlobal: true,
  load: [configuration],
};
