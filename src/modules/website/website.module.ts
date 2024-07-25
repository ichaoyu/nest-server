import { Module } from '@nestjs/common';

import { SiteModule } from './site';
import { FlinkModule } from './flink';

@Module({
  imports: [SiteModule, FlinkModule],
})
export class WebSiteModule {}
