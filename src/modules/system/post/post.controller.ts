import { Body, Controller, Delete, Post, Put, Query } from '@nestjs/common';
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

import { CreatePostDTO, FindPostPageDTO, UpdatePostDTO } from './post.dto';
import { PostService } from './post.service';
import { FindPostPageVO } from './post.vo';

@ApiTags('岗位接口')
@ApiBearerAuth()
@Controller('/system/post')
export class PostController {
  constructor(private postService: PostService) {}

  @ApiOperation({ summary: '查询岗位分页' })
  @ApiOkResponse({ type: FindPostPageVO })
  @Permission('system:post:list')
  @Post('/page')
  async findPage(@Body() dto: FindPostPageDTO) {
    return await this.postService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '新增岗位' })
  @OperLog({ title: '岗位管理', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('system:post:add')
  @Post('/create')
  async create(@Body() dto: CreatePostDTO) {
    return await this.postService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新岗位' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '岗位管理', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:post:edit')
  @Put('/update')
  async updatePost(@Query('id') id: number, @Body() dto: UpdatePostDTO) {
    await this.postService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除岗位' })
  @OperLog({ title: '岗位管理', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('system:post:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.postService.handleDeleteMany(dto);
  }

  @ApiOperation({ summary: '导出岗位分页' })
  @ApiOkResponse({ type: ExportResultVO })
  @OperLog({ title: '岗位管理', bizType: ENTITY_BIZ_TYPE.EXPORT })
  @Permission('system:post:export')
  @Post('/export')
  async exportPage(@Body() dto: FindPostPageDTO) {
    return await this.postService.handleExportPage(dto);
  }
}
