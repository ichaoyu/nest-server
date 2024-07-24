import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { Public } from '@/decorators';

import { LoginDTO } from './auth.dto';
import { AuthService } from './auth.service';
import { GetCaptchaVO, LoginVO } from './auth.vo';

@ApiTags('鉴权接口')
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: '获取验证码' })
  @ApiOkResponse({ type: GetCaptchaVO })
  @Public()
  @Get('/captcha')
  async getCaptcha() {
    return await this.authService.handleGetCaptcha();
  }

  @ApiOperation({ summary: '登录' })
  @ApiOkResponse({ type: LoginVO })
  @Public()
  @Post('/login')
  async login(@Body() dto: LoginDTO) {
    return await this.authService.handleLogin(dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: '退出' })
  @Post('/logout')
  async logout() {
    await this.authService.handleLogout();
  }
}
