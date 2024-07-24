import { Module } from '@nestjs/common';

import { SiteModule } from './site';

@Module({
  imports: [SiteModule],
})
export class WebSiteModule {}
