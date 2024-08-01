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
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { ENTITY_BIZ_TYPE } from '@/constants';
import { Files, OperLog, Permission } from '@/decorators';
import { IFiles } from '@/interfaces';
import { DelDTO, ExportResultVO, UploadFileDTO } from '@/models';

import {
  CreateUserDTO,
  FindUserPageDTO,
  ResetPasswordDTO,
  UpdateUserDTO,
} from './user.dto';
import { UserService } from './user.service';
import {
  FindUserPageVO,
  GetUserAddFormDataVO,
  GetUserEditFormDataVO,
  ImportUserTemplateVO,
} from './user.vo';

@ApiTags('用户接口')
@ApiBearerAuth()
@Controller('/system/user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: '查询用户分页' })
  @ApiOkResponse({ type: FindUserPageVO })
  @Permission('system:user:list')
  @Post('/page')
  async findPage(@Body() dto: FindUserPageDTO) {
    return await this.userService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '获取用户新增表单数据' })
  @ApiOkResponse({ type: GetUserAddFormDataVO })
  @Permission('system:user:list')
  @Get('/formAddData')
  async getFormAddData() {
    return await this.userService.handleGetFormData();
  }

  @ApiOperation({ summary: '获取用户编辑表单数据' })
  @ApiOkResponse({ type: GetUserEditFormDataVO })
  @ApiQuery({ name: 'id', description: '主键' })
  @Permission('system:user:list')
  @Get('/formEditData')
  async getFormEditData(@Query('id') id: string) {
    return await this.userService.handleGetFormData(id);
  }

  @ApiOperation({ summary: '新增用户' })
  @OperLog({ title: '用户管理', bizType: ENTITY_BIZ_TYPE.INSERT })
  @Permission('system:user:add')
  @Post('/create')
  async create(@Body() dto: CreateUserDTO) {
    await this.userService.handleCreate(dto);
  }

  @ApiOperation({ summary: '更新用户' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '用户管理', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:user:edit')
  @Put('/update')
  async updateUser(@Query('id') id: number, @Body() dto: UpdateUserDTO) {
    await this.userService.handleUpdate(id, dto);
  }

  @ApiOperation({ summary: '删除用户' })
  @OperLog({ title: '用户管理', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('system:user:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.userService.handleDeleteMany(dto);
  }

  @ApiOperation({ summary: '导入用户模板' })
  @ApiOkResponse({ type: ImportUserTemplateVO })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ description: '用户模板', type: UploadFileDTO })
  @OperLog({ title: '用户管理', bizType: ENTITY_BIZ_TYPE.IMPORT })
  @Permission('system:user:import')
  @Post('/template/import')
  async importTemplate(@Files() files: IFiles) {
    return await this.userService.handleImportTemplate(files[0]);
  }

  @ApiOperation({ summary: '导出用户模板' })
  @ApiOkResponse({ type: ExportResultVO })
  @OperLog({ title: '用户管理', bizType: ENTITY_BIZ_TYPE.EXPORT })
  @Permission('system:user:export')
  @Post('/template/export')
  async exportTemplate() {
    return await this.userService.handleExportTemplate();
  }

  @ApiOperation({ summary: '导出用户分页' })
  @ApiOkResponse({ type: ExportResultVO })
  @OperLog({ title: '用户管理', bizType: ENTITY_BIZ_TYPE.EXPORT })
  @Permission('system:user:export')
  @Post('/page/export')
  async exportPage(@Body() dto: FindUserPageDTO) {
    return await this.userService.handleExportPage(dto);
  }

  @ApiOperation({ summary: '重置密码' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '用户管理', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:user:edit')
  @Put('/resetPassword')
  async resetPassword(@Query('id') id: number, @Body() dto: ResetPasswordDTO) {
    await this.userService.handleResetPassword(id, dto);
  }

  @ApiOperation({ summary: '切换用户状态' })
  @ApiQuery({ name: 'id', description: '主键' })
  @OperLog({ title: '用户管理', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Permission('system:user:edit')
  @Put('/toggleStatus')
  async toggleStatus(@Query('id') id: string) {
    await this.userService.handleToggleStatus(id);
  }
}
