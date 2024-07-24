import { BullModule } from '@nestjs/bull';
import { Global, Module } from '@nestjs/common';

import { BULL_OPTIONS, BULL_QUEUES } from '@/options';

import { LoginLogProcessor } from './login-log.processor';
import { OperLogProcessor } from './oper-log.processor';

@Global()
@Module({
  imports: [
    BullModule.forRootAsync(BULL_OPTIONS),
    BullModule.registerQueue(...BULL_QUEUES),
  ],
  providers: [LoginLogProcessor, OperLogProcessor],
  exports: [BullModule],
})
export class QueuesModule {}
