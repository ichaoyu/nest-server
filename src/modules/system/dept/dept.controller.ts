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

import { CreateDeptDTO, FindDeptListDTO, UpdateDeptDTO } from './dept.dto';
import { DeptService } from './dept.service';
import { FindDeptListVO, GetDeptTreeVO } from './dept.vo';

@ApiTags('部门接口')
@ApiBearerAuth()
@Controller('/system/dept')
export class DeptController {
  constructor(private deptService: DeptService) {}

  @ApiOperation({ summary: '查询部门列表' })
  @ApiOkResponse({ type: FindDeptListVO })
  @Permission('system:dept:list')
  @Post('/list')
  async findList(@Body() dto: FindDeptListDTO) {
    return await this.deptService.handleFindList(dto);
  }

  @ApiOperation({ summary: '获取部门树' })
  @ApiOkResponse({ type: GetDeptTreeVO })
  @Permission('system:dept:list')
  @Get('/tree')
  async getTree() {
    return await this.deptService.handleGetTree();
  }

  @ApiOperation({ summary: '新增部门' })
  @OperLog({ title: '部门管理', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('system:dept:add')
  @Post('/create')
  async create(@Body() dto: CreateDeptDTO) {
    await this.deptService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新部门' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '部门管理', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:dept:edit')
  @Put('/update')
  async update(@Query('id') id: number, @Body() dto: UpdateDeptDTO) {
    await this.deptService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除部门' })
  @OperLog({ title: '部门管理', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('system:dept:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.deptService.handleDeleteMany(dto);
  }
}
