import { Body, Controller, Get, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { ENTITY_BIZ_TYPE } from '@/constants';
import { OperLog } from '@/decorators';

import {
  UpdateCurrentUserBaseDTO,
  UpdateCurrentUserPasswordDTO,
} from './current-user.dto';
import { CurrentUserService } from './current-user.service';
import {
  GetCurrentUserInfoVO,
  GetCurrentUserProfileVO,
} from './current-user.vo';

@ApiTags('当前用户接口')
@ApiBearerAuth()
@Controller('/current-user')
export class CurrentUserController {
  constructor(private currentService: CurrentUserService) {}

  @ApiOperation({ summary: '获取用户信息' })
  @ApiOkResponse({ type: GetCurrentUserInfoVO })
  @Get('/getInfo')
  async getInfo() {
    return await this.currentService.handleGetInfo();
  }

  @ApiOperation({ summary: '获取用户配置' })
  @ApiOkResponse({ type: GetCurrentUserProfileVO })
  @Get('/getProfile')
  async getProfile() {
    return await this.currentService.handleGetProfile();
  }

  @ApiOperation({ summary: '更新用户基本信息' })
  @OperLog({ title: '当前用户', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Put('/updateBase')
  async updateBase(@Body() dto: UpdateCurrentUserBaseDTO) {
    await this.currentService.handleUpdateBase(dto);
  }

  @ApiOperation({ summary: '更新用户密码' })
  @OperLog({ title: '当前用户', bizType: ENTITY_BIZ_TYPE.UPDATE })
  @Put('/updatePassword')
  async updatePassword(@Body() dto: UpdateCurrentUserPasswordDTO) {
    await this.currentService.handleUpdatePassword(dto);
  }
}
