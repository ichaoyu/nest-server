import { Module } from '@nestjs/common';
import { WebArticleEntity, WebTagEntity } from '@/database';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  imports: [TypeOrmModule.forFeature([WebArticleEntity, WebTagEntity])],
  exports: [TypeOrmModule],
})
export class ArticleModule {}
