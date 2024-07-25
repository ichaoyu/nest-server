import { Module } from '@nestjs/common';
import { WebFlinkEntity } from '@/database';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FlinkController } from './flink.controller';
import { FlinkService } from './flink.service';

@Module({
  controllers: [FlinkController],
  providers: [FlinkService],
  imports: [TypeOrmModule.forFeature([WebFlinkEntity])],
  exports: [TypeOrmModule],
})
export class FlinkModule {}
