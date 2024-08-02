import { Controller, Body, Post, Put, Query, Delete } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { OperLog, Permission } from '@/decorators';
import { TagService } from './tag.service';
import {
  CreateTagDTO,
  FindTagPageDTO,
  UpdateTagDto,
} from './tag.dto';
import { FindTagPageVO } from './tag.vo';
import { ENTITY_BIZ_TYPE } from '@/constants';
import { DelDTO } from '@/models';

@ApiTags('标签接口')
@ApiBearerAuth()
@Controller('/website/tag')
export class TagController {
  constructor(private tagService: TagService) {}

  @ApiOperation({ summary: '获取分页列表' })
  @ApiOkResponse({ type: FindTagPageVO })
  @Permission('website:tag:list')
  @Post('/list')
  async getPages(@Body() dto: FindTagPageDTO) {
    return await this.tagService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '新增标签' })
  @OperLog({ title: '标签', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('website:tag:add')
  @Post('/add')
  async addLink(@Body() dto: CreateTagDTO) {
    return await this.tagService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新标签' })
  @ApiQuery({ name: 'id', description: '更新主键' })
  @OperLog({ title: '标签', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('website:tag:edit')
  @Put('/update')
  async update(@Query('id') id: number, @Body() dto: UpdateTagDto) {
    await this.tagService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除标签' })
  @OperLog({ title: '标签', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('website:tag:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.tagService.handleDeleteMany(dto);
  }
}
