import { Controller, Body, Post, Put, Query, Delete } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { OperLog, Permission } from '@/decorators';
import { CategoryService } from './category.service';
import {
  CreateCategoryDTO,
  FindCategoryPageDTO,
  UpdateCategoryDTO,
} from './category.dto';
import { FindCategoryPageVO } from './category.vo';
import { ENTITY_BIZ_TYPE } from '@/constants';
import { DelDTO } from '@/models';

@ApiTags('网站栏目接口')
@ApiBearerAuth()
@Controller('/website/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({ summary: '获取分页列表' })
  @ApiOkResponse({ type: FindCategoryPageVO })
  @Permission('website:category:list')
  @Post('/list')
  async getPages(@Body() dto: FindCategoryPageDTO) {
    return await this.categoryService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '新增网站栏目' })
  @OperLog({ title: '网站栏目', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('website:category:add')
  @Post('/add')
  async addLink(@Body() dto: CreateCategoryDTO) {
    return await this.categoryService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新网站栏目' })
  @ApiQuery({ name: 'id', description: '更新主键' })
  @OperLog({ title: '网站栏目', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('website:category:edit')
  @Put('/update')
  async update(@Query('id') id: number, @Body() dto: UpdateCategoryDTO) {
    await this.categoryService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除网站栏目' })
  @OperLog({ title: '网站栏目', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('website:category:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.categoryService.handleDeleteMany(dto);
  }
}
