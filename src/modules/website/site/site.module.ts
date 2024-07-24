import { Module } from '@nestjs/common';
import { WebSiteInfoEntity } from '@/database';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SiteController } from './site.controller';
import { SiteService } from './site.service';

@Module({
  controllers: [SiteController],
  providers: [SiteService],
  imports: [TypeOrmModule.forFeature([WebSiteInfoEntity])],
  exports: [TypeOrmModule],
})
export class SiteModule {}
