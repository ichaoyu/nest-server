import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { ENTITY_BIZ_TYPE } from '@/constants';
import { OperLog, Permission } from '@/decorators';

import { FindOnlinePageDTO } from './online.dto';
import { OnlineService } from './online.service';
import { FindOnlinePageVO } from './online.vo';

@ApiTags('在线用户接口')
@ApiBearerAuth()
@Controller('/monitor/online')
export class OnlineController {
  constructor(private onlineService: OnlineService) {}

  @ApiOperation({ summary: '查询在线分页' })
  @ApiOkResponse({ type: FindOnlinePageVO })
  @Permission('monitor:online:list')
  @Post('/page')
  async findPage(@Body() dto: FindOnlinePageDTO) {
    return await this.onlineService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '用户下线' })
  @ApiQuery({ name: 'id', description: '会话编号' })
  @OperLog({ title: '在线用户', bizType: ENTITY_BIZ_TYPE.FORCE })
  @Permission('monitor:online:delete')
  @Delete('/')
  async offline(@Query('id') id: string) {
    await this.onlineService.handleOffline(id);
  }
}
