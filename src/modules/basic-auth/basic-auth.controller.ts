import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

import { EXTRAS } from '@/constants';
import { IResponse } from '@/interfaces';
import { HashUtil } from '@/utils';

import { BasicAuthLoginDTO } from './basic-auth.dto';

@ApiExcludeController()
@Controller(EXTRAS.BASIC_AUTH_PATH)
export class BasicAuthController {
  @Get('/')
  @Render('basic-auth')
  index() {
    return {};
  }

  @Post('/login')
  async login(
    @Body() dto: BasicAuthLoginDTO,
    @Res({ passthrough: true }) res: IResponse,
  ) {
    const newVal = `${dto.userName}:${dto.password}`;

    if (newVal === EXTRAS.BASIC_AUTH_RAW) {
      const newHash = await HashUtil.crypto(newVal);

      res.status(HttpStatus.OK);
      res.setCookie(EXTRAS.BASIC_AUTH_KEY, newHash, {
        path: '/',
        httpOnly: true,
        maxAge: 2 * 24 * 60 * 60,
      });
      return {};
    }
    res.status(HttpStatus.BAD_REQUEST);
  }
}
