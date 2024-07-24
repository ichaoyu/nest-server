import { Module } from '@nestjs/common';

import { AuthModule } from './auth';
import { BasicAuthModule } from './basic-auth';
import { CurrentUserModule } from './current-user';
import { MonitorModule } from './monitor';
import { SystemModule } from './system';
import { WebSiteModule } from './website';

@Module({
  imports: [
    AuthModule,
    BasicAuthModule,
    CurrentUserModule,
    MonitorModule,
    SystemModule,
    WebSiteModule,
  ],
})
export class IndexModule {}
