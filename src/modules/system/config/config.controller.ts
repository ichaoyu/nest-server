import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { CACHES, ENTITY_BIZ_TYPE } from '@/constants';
import { OperLog, Permission } from '@/decorators';
import { DelDTO, ExportResultVO } from '@/models';

import {
  CreateConfigDTO,
  FindConfigPageDTO,
  UpdateConfigDTO,
} from './config.dto';
import { ConfigService } from './config.service';
import { FindConfigPageVO, GetConfigValueVO } from './config.vo';

@ApiTags('参数接口')
@ApiBearerAuth()
@Controller('/system/config')
export class ConfigController {
  constructor(private configService: ConfigService) {}

  @ApiOperation({ summary: '查询参数分页' })
  @ApiOkResponse({ type: FindConfigPageVO })
  @Permission('system:config:list')
  @Post('/page')
  async findPage(@Body() dto: FindConfigPageDTO) {
    return await this.configService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '获取参数值' })
  @ApiOkResponse({ type: GetConfigValueVO })
  @ApiQuery({ name: 'key', description: '参数键名' })
  @Permission('system:config:list')
  @CacheKey(CACHES.SYS_CONFIG_KEY)
  @CacheTTL(15 * 1000)
  @Get('/value')
  async getValue(@Query('key') key: string) {
    return await this.configService.handleGetValue(key);
  }

  @ApiOperation({ summary: '新增参数' })
  @OperLog({ title: '参数配置', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('system:config:add')
  @Post('/create')
  async create(@Body() dto: CreateConfigDTO) {
    await this.configService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新参数' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '参数配置', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:config:edit')
  @Put('/update')
  async update(@Query('id') id: number, @Body() dto: UpdateConfigDTO) {
    await this.configService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除参数' })
  @OperLog({ title: '参数配置', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('system:config:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.configService.handleDeleteMany(dto);
  }

  @ApiOperation({ summary: '导出参数分页' })
  @ApiOkResponse({ type: ExportResultVO })
  @OperLog({ title: '参数配置', bizType: ENTITY_BIZ_TYPE.EXPORT })
  @Permission('system:config:export')
  @Post('/export')
  async exportPage(@Body() dto: FindConfigPageDTO) {
    return await this.configService.handleExportPage(dto);
  }
}
