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

import { FindOperLogPageDTO } from './oper-log.dto';
import { OperLogService } from './oper-log.service';
import { FindOperLogPageVO } from './oper-log.vo';

@ApiTags('操作日志接口')
@ApiBearerAuth()
@Controller('/monitor/operLog')
export class OperLogController {
  constructor(private operLogService: OperLogService) {}

  @ApiOperation({ summary: '查询操作日志分页' })
  @ApiOkResponse({ type: FindOperLogPageVO })
  @Permission('monitor:operLog:list')
  @Post('/page')
  async findPage(@Body() dto: FindOperLogPageDTO) {
    return await this.operLogService.handleFindPage(dto);
  }

  @ApiOperation({ summary: '导出操作日志分页' })
  @ApiOkResponse({ type: ExportResultVO })
  @OperLog({ title: '操作日志', bizType: ENTITY_BIZ_TYPE.EXPORT })
  @Permission('monitor:operLog:export')
  @Post('/export')
  async exportPage(@Body() dto: FindOperLogPageDTO) {
    return await this.operLogService.handleExportPage(dto);
  }

  @ApiOperation({ summary: '删除操作日志' })
  @OperLog({ title: '操作日志', bizType: ENTITY_BIZ_TYPE.DELETE })
  @Permission('monitor:operLog:remove')
  @Delete('/delete')
  async deleteMany(@Body() dto: DelDTO) {
    await this.operLogService.handleDeleteMany(dto);
  }

  @ApiOperation({ summary: '清空操作日志' })
  @OperLog({ title: '操作日志', bizType: ENTITY_BIZ_TYPE.CLEAN })
  @Permission('monitor:operLog:remove')
  @Delete('/clear')
  async clear() {
    await this.operLogService.handleClear();
  }
}
