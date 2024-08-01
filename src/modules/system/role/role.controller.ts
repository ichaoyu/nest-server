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

import {
  AllocateDTO,
  CreateRoleDTO,
  FindAllocatedPageDTO,
  FindRolePageDTO,
  FindUnallocatedPageDTO,
  UpdateRoleDTO,
} from './role.dto';
import { RoleService } from './role.service';
import {
  FindAllocatedPageVO,
  FindRolePageVO,
  FindUnallocatedPageVO,
} from './role.vo';

@ApiTags('角色接口')
@ApiBearerAuth()
@Controller('/system/role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @ApiOperation({ summary: '查询角色分页' })
  @ApiOkResponse({ type: FindRolePageVO })
  @Permission('system:role:list')
  @Post('/page')
  async findPage(@Body() dto: FindRolePageDTO) {
    return await this.roleService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '新增角色' })
  @OperLog({ title: '角色管理', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('system:role:add')
  @Post('/create')
  async create(@Body() dto: CreateRoleDTO) {
    await this.roleService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新角色' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '角色管理', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:role:edit')
  @Put('/update')
  async update(@Query('id') id: number, @Body() dto: UpdateRoleDTO) {
    await this.roleService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除角色' })
  @OperLog({ title: '角色管理', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('system:role:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.roleService.handleDeleteMany(dto);
  }

  @ApiOperation({ summary: '导出角色分页' })
  @ApiOkResponse({ type: ExportResultVO })
  @OperLog({ title: '角色管理', bizType: ENTITY_BIZ_TYPE.EXPORT })
  @Permission('system:role:export')
  @Post('/export')
  async exportPage(@Body() dto: FindRolePageDTO) {
    return await this.roleService.handleExportPage(dto);
  }

  @ApiOperation({ summary: '切换角色状态' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '角色管理', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:role:edit')
  @Put('/toggleStatus')
  async toggleStatus(@Query('id') id: string) {
    await this.roleService.handleToggleStatus(id);
  }

  @ApiOperation({ summary: '获取角色绑定的用户分页' })
  @ApiOkResponse({ type: FindAllocatedPageVO })
  @ApiQuery({ name: 'id', description: '主键' })
  @Permission('system:role:list')
  @Post('/allocatedPage')
  async findAllocatedPage(
    @Query('id') id: number,
    @Body() dto: FindAllocatedPageDTO,
  ) {
    return await this.roleService.handleFindAllocatedPage(id, dto);
  }

  @ApiOperation({ summary: '取消角色绑定的用户' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '角色管理', bizType: ENTITY_BIZ_TYPE.GRANT })
  @Permission('system:role:edit')
  @Put('/cancelAllocated')
  async cancelAllocated(@Query('id') id: number, @Body() dto: DelDTO) {
    await this.roleService.handleCancelAllocated(id, dto);
  }

  @ApiOperation({ summary: '获取未绑定角色的用户分页' })
  @ApiOkResponse({ type: FindUnallocatedPageVO })
  @ApiQuery({ name: 'id', description: '主键' })
  @Permission('system:role:list')
  @Post('/unallocatedPage')
  async findUnallocatedPage(
    @Query('id') id: number,
    @Body() dto: FindUnallocatedPageDTO,
  ) {
    return await this.roleService.handleFindUnallocatedPage(id, dto);
  }

  @ApiOperation({ summary: '角色绑定用户' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '角色管理', bizType: ENTITY_BIZ_TYPE.GRANT })
  @Permission('system:role:edit')
  @Put('/allocate')
  async allocate(@Query('id') id: number, @Body() dto: AllocateDTO) {
    await this.roleService.handleAllocate(id, dto);
  }
}
