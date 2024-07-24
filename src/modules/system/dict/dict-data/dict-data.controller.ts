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
  CreateDictDataDTO,
  FindDictDataPageDTO,
  UpdateDictDataDTO,
} from './dict-data.dto';
import { DictDataService } from './dict-data.service';
import { FindDictDataPageVO, GetDictDataListVO } from './dict-data.vo';

@ApiTags('字典数据接口')
@ApiBearerAuth()
@Controller('/system/dict/data')
export class DictDataController {
  constructor(private dictDataService: DictDataService) {}

  @ApiOperation({ summary: '获取字典数据分页' })
  @ApiOkResponse({ type: FindDictDataPageVO })
  @Permission('system:dict:list')
  @Post('/page')
  async findPage(@Body() dto: FindDictDataPageDTO) {
    return await this.dictDataService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '获取字典数据列表' })
  @ApiOkResponse({ type: GetDictDataListVO })
  @ApiQuery({ name: 'dictType', description: '字典类型' })
  @Permission('system:dict:list')
  @CacheKey(CACHES.SYS_DICT_KEY)
  @CacheTTL(15 * 1000)
  @Get('/list')
  async getList(@Query('dictType') dictType: string) {
    return await this.dictDataService.handleGetList(dictType);
  }

  @ApiOperation({ summary: '新增字典数据' })
  @OperLog({ title: '字典数据', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('system:dict:add')
  @Post('/create')
  async create(@Body() dto: CreateDictDataDTO) {
    await this.dictDataService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新字典数据' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '字典数据', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:dict:edit')
  @Put('/update')
  async update(@Query('id') id: string, @Body() dto: UpdateDictDataDTO) {
    await this.dictDataService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除字典数据' })
  @OperLog({ title: '字典数据', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('system:dict:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.dictDataService.handleDeleteMany(dto);
  }

  @ApiOperation({ summary: '导出字典数据分页' })
  @ApiOkResponse({ type: ExportResultVO })
  @OperLog({ title: '字典数据', bizType: ENTITY_BIZ_TYPE.EXPORT })
  @Permission('system:dict:export')
  @Post('/export')
  async exportPage(@Body() dto: FindDictDataPageDTO) {
    return await this.dictDataService.handleExportPage(dto);
  }
}
