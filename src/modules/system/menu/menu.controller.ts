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
import { DelDTO } from '@/models';

import { CreateMenuDTO, FindMenuListDTO, UpdateMenuDTO } from './menu.dto';
import { MenuService } from './menu.service';
import { FindMenuListVO, GetMenuTreeVO } from './menu.vo';

@ApiTags('菜单接口')
@ApiBearerAuth()
@Controller('/system/menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @ApiOperation({ summary: '查询菜单列表' })
  @ApiOkResponse({ type: FindMenuListVO })
  @Permission('system:menu:list')
  @Post('/list')
  async findList(@Body() dto: FindMenuListDTO) {
    return await this.menuService.handleFindList(dto);
  }

  @ApiOperation({ summary: '获取菜单树' })
  @ApiOkResponse({ type: GetMenuTreeVO })
  @Permission('system:menu:list')
  @Get('/tree')
  async getTree() {
    return await this.menuService.handleGetTree();
  }

  @ApiOperation({ summary: '新增菜单' })
  @OperLog({ title: '菜单管理', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('system:menu:add')
  @Post('/create')
  async create(@Body() dto: CreateMenuDTO) {
    await this.menuService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新菜单' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '菜单管理', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:menu:edit')
  @Put('/update')
  async update(@Query('id') id: number, @Body() dto: UpdateMenuDTO) {
    await this.menuService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除菜单列表' })
  @OperLog({ title: '菜单管理', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('system:menu:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.menuService.handleDeleteMany(dto);
  }
}
