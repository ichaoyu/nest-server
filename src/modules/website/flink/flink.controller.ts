import { Controller, Body, Post, Put, Query, Delete } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { OperLog, Permission } from '@/decorators';
import { FlinkService } from './flink.service';
import { CreateFlinkDTO, FindFlinkPageDTO, UpdateFlinkDto } from './flink.dto';
import { FindFlinkPageVO } from './flink.vo';
import { ENTITY_BIZ_TYPE } from '@/constants';
import { DelDTO } from '@/models';

@ApiTags('友情链接接口')
@ApiBearerAuth()
@Controller('/website/flink')
export class FlinkController {
  constructor(private flinkService: FlinkService) {}

  @ApiOperation({ summary: '获取分页列表' })
  @ApiOkResponse({ type: FindFlinkPageVO })
  @Permission('website:flink:list')
  @Post('/list')
  async getPages(@Body() dto: FindFlinkPageDTO) {
    return await this.flinkService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '新增友情链接' })
  @OperLog({ title: '友情链接', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('website:flink:add')
  @Post('/add')
  async addLink(@Body() dto: CreateFlinkDTO) {
    return await this.flinkService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新友情链接' })
  @ApiQuery({ name: 'id', description: '更新主键' })
  @OperLog({ title: '友情链接', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('website:flink:edit')
  @Put('/update')
  async update(@Query('id') id: number, @Body() dto: UpdateFlinkDto) {
    await this.flinkService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除友情链接' })
  @OperLog({ title: '友情链接', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('website:flink:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.flinkService.handleDeleteMany(dto);
  }
}
