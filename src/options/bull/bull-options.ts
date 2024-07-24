import { SharedBullAsyncConfiguration } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';

import { QUEUES } from '@/constants';

export const BULL_OPTIONS: SharedBullAsyncConfiguration = {
  useFactory(configService: ConfigService) {
    return configService.get('bull');
  },
  inject: [ConfigService],
};

export const BULL_QUEUES = Object.values(QUEUES).map((v) => ({ name: v }));
