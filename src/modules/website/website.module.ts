import { Module } from '@nestjs/common';

import { SiteModule } from './site';
import { FlinkModule } from './flink';
import { MessageModule } from './message';
import { ArticleModule } from './article';
import { TagModule } from './tag';
import { CategoryModule } from './category';

@Module({
  imports: [
    SiteModule,
    FlinkModule,
    MessageModule,
    ArticleModule,
    TagModule,
    CategoryModule,
  ],
})
export class WebSiteModule {}
