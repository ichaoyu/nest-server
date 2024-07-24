import { Controller, Get, Query, Body, Post, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiQuery,
  ApiOkResponse,
} from '@nestjs/swagger';

import { OperLog, Permission } from '@/decorators';
import { CACHES, ENTITY_BIZ_TYPE } from '@/constants';
import { SiteService } from './site.service';
import { GetSiteInfoVO } from './site.vo';
import { UpdateConfigDTO } from './site.dto';

@ApiTags('网站配置接口')
@ApiBearerAuth()
@Controller('/website/info')
export class SiteController {
  constructor(private SiteService: SiteService) {}

  @ApiOperation({ summary: '获取网站配置' })
  @ApiQuery({ name: 'id', description: '主键', example: '1' })
  @ApiOkResponse({ type: GetSiteInfoVO })
  @Permission('website:info:all')
  @Get('/get')
  async getInfo(@Query('id') id: string) {
    return await this.SiteService.handleGetSiteInfo(id);
  }

  @ApiOperation({ summary: '更新网站配置' })
  @ApiQuery({ name: 'id', description: '主键', example: '1' })
  @OperLog({ title: '更新网站配置', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('website:info:edit')
  @Put('/update')
  async updateInfo(@Query('id') id: string, @Body() dto: UpdateConfigDTO) {
    return await this.SiteService.handleUpdateSiteInfo(id, dto);
  }
}
