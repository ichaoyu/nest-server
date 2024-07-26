import { Module } from '@nestjs/common';
import { WebMessageEntity } from '@/database';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [TypeOrmModule.forFeature([WebMessageEntity])],
  exports: [TypeOrmModule],
})
export class MessageModule {}
