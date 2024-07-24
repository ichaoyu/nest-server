import { Module } from '@nestjs/common';

import { CacheModule } from './cache';
import { LoginLogModule } from './login-log';
import { OnlineModule } from './online';
import { OperLogModule } from './oper-log';

@Module({
  imports: [CacheModule, LoginLogModule, OnlineModule, OperLogModule],
})
export class MonitorModule {}
