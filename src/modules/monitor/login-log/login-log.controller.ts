import { Body, Controller, Delete, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { ENTITY_BIZ_TYPE } from '@/constants';
import { OperLog, Permission } from '@/decorators';
import { DelDTO, ExportResultVO } from '@/models';

import { FindLoginLogPageDTO } from './login-log.dto';
import { LoginLogService } from './login-log.service';
import { FindLoginLogPageVO } from './login-log.vo';

@ApiTags('登录日志接口')
@ApiBearerAuth()
@Controller('/monitor/loginLog')
export class LoginLogController {
  constructor(private loginLogService: LoginLogService) {}

  @ApiOperation({ summary: '查询登录日志分页' })
  @ApiOkResponse({ type: FindLoginLogPageVO })
  @Permission('monitor:loginLog:list')
  @Post('/page')
  async findPage(@Body() dto: FindLoginLogPageDTO) {
    return await this.loginLogService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '导出登录日志分页' })
  @ApiOkResponse({ type: ExportResultVO })
  @OperLog({ title: '登录日志', bizType: ENTITY_BIZ_TYPE.EXPORT })
  @Permission('monitor:loginLog:export')
  @Post('/export')
  async exportPage(@Body() dto: FindLoginLogPageDTO) {
    return await this.loginLogService.handleExportPage(dto);
  }

  @ApiOperation({ summary: '删除登录日志' })
  @OperLog({ title: '登录日志', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('monitor:loginLog:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.loginLogService.handleDeleteMany(dto);
  }

  @ApiOperation({ summary: '清空登录日志' })
  @OperLog({ title: '登录日志', bizType: ENTITY_BIZ_TYPE.CLEAN })
  @Permission('monitor:loginLog:remove')
  @Delete('/clear')
  async clear() {
    await this.loginLogService.handleClear();
  }
}
