import {
  Controller,
  Body,
  Post,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { OperLog, Permission } from '@/decorators';
import { MessageService } from './message.service';
import { FindMessagePageDTO } from './message.dto';
import { FindMessagePageVO } from './message.vo';
import { ENTITY_BIZ_TYPE } from '@/constants';
import { DelDTO } from '@/models';

@ApiTags('网站留言接口')
@ApiBearerAuth()
@Controller('/website/message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @ApiOperation({ summary: '获取分页列表' })
  @ApiOkResponse({ type: FindMessagePageVO })
  @Permission('website:message:list')
  @Post('/list')
  // @HttpCode(HttpStatus.OK)
  async getPages(@Body() dto: FindMessagePageDTO) {
    return await this.messageService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '删除网站留言' })
  @OperLog({ title: '网站留言', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('website:message:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.messageService.handleDeleteMany(dto);
  }
}
