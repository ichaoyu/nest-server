import { Module } from '@nestjs/common';
import { WebTagEntity } from '@/database';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [TypeOrmModule.forFeature([WebTagEntity])],
  exports: [TypeOrmModule],
})
export class TagModule {}
