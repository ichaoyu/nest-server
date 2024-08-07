import { Module } from '@nestjs/common';
import { WebCategoryEntity } from '@/database';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [TypeOrmModule.forFeature([WebCategoryEntity])],
  exports: [TypeOrmModule],
})
export class CategoryModule {}
