import { Module } from '@nestjs/common';

import { SiteModule } from './site';
import { FlinkModule } from './flink';
import { MessageModule } from './message';

@Module({
  imports: [SiteModule, FlinkModule, MessageModule],
})
export class WebSiteModule {}
