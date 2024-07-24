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

import { ENTITY_BIZ_TYPE } from '@/constants';
import { OperLog, Permission } from '@/decorators';
import { DelDTO, ExportResultVO } from '@/models';

import {
  CreateDictTypeDTO,
  FindDictTypePageDTO,
  UpdateDictTypeDTO,
} from './dict-type.dto';
import { DictTypeService } from './dict-type.service';
import { FindDictTypePageVO, GetDictTypeVO } from './dict-type.vo';

@ApiTags('字典类型接口')
@ApiBearerAuth()
@Controller('/system/dict/type')
export class DictTypeController {
  constructor(private dictTypeService: DictTypeService) {}

  @ApiOperation({ summary: '查询字典类型分页' })
  @ApiOkResponse({ type: FindDictTypePageVO })
  @Permission('system:dict:list')
  @Post('/page')
  async findPage(@Body() dto: FindDictTypePageDTO) {
    return await this.dictTypeService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '新增字典类型' })
  @OperLog({ title: '字典类型', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('system:dict:add')
  @Post('/create')
  async create(@Body() dto: CreateDictTypeDTO) {
    await this.dictTypeService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新字典类型' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '字典类型', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:dict:edit')
  @Put('/update')
  async update(@Query('id') id: string, @Body() dto: UpdateDictTypeDTO) {
    await this.dictTypeService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除字典类型' })
  @OperLog({ title: '字典类型', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('system:dict:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.dictTypeService.handleDeleteMany(dto);
  }

  @ApiOperation({ summary: '获取字典类型' })
  @ApiOkResponse({ type: GetDictTypeVO })
  @ApiQuery({ name: 'id', description: '主键' })
  @Permission('system:dict:list')
  @Get('/')
  async getDictType(@Query('id') id: string) {
    return await this.dictTypeService.handleGetDictType(id);
  }

  @ApiOperation({ summary: '导出字典类型分页' })
  @ApiOkResponse({ type: ExportResultVO })
  @OperLog({ title: '字典类型', bizType: ENTITY_BIZ_TYPE.EXPORT })
  @Permission('system:dict:export')
  @Post('/export')
  async exportPage(@Body() dto: FindDictTypePageDTO) {
    return await this.dictTypeService.handleExportPage(dto);
  }
}
