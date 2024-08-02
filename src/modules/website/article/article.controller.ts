import { Controller, Body, Post, Put, Query, Delete } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { OperLog, Permission } from '@/decorators';
import { ArticleService } from './article.service';
import {
  CreateArticleDTO,
  FindArticlePageDTO,
  UpdateArticleDto,
} from './article.dto';
import { FindArticlePageVO } from './article.vo';
import { ENTITY_BIZ_TYPE } from '@/constants';
import { DelDTO } from '@/models';

@ApiTags('网站文章接口')
@ApiBearerAuth()
@Controller('/website/article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @ApiOperation({ summary: '获取分页列表' })
  @ApiOkResponse({ type: FindArticlePageVO })
  @Permission('website:article:list')
  @Post('/list')
  async getPages(@Body() dto: FindArticlePageDTO) {
    return await this.articleService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '新增网站文章' })
  @OperLog({ title: '网站文章', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('website:article:add')
  @Post('/add')
  async addLink(@Body() dto: CreateArticleDTO) {
    return await this.articleService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新网站文章' })
  @ApiQuery({ name: 'id', description: '更新主键' })
  @OperLog({ title: '网站文章', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('website:article:edit')
  @Put('/update')
  async update(@Query('id') id: number, @Body() dto: UpdateArticleDto) {
    await this.articleService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除网站文章' })
  @OperLog({ title: '网站文章', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('website:article:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.articleService.handleDeleteMany(dto);
  }
}
