import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { MESSAGES } from '@/constants';

/**
 * 默认错误处理
 */
@Catch()
export class DefaultFilter implements ExceptionFilter {
  constructor(
    @InjectPinoLogger(DefaultFilter.name)
    private loggerService: PinoLogger,
    private httpAdapterHost: HttpAdapterHost,
  ) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const code =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const msg =
      exception instanceof HttpException
        ? exception.message
        : MESSAGES.INTERNAL_SERVER_ERROR;

    // @ts-ignore
    this.loggerService.error(exception.stack);

    // // statusCode统一返回200，具体错误处理在返回体里
    httpAdapter.reply(
      ctx.getResponse(),
      {
        code,
        msg,
      },
      code,
    );
  }
}
