import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnprocessableEntityException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { MESSAGES } from '@/constants';

/**
 * 参数校验错误处理
 */
@Catch(UnprocessableEntityException)
export class ValidationFilter implements ExceptionFilter {
  constructor(
    @InjectPinoLogger(ValidationFilter.name)
    private loggerService: PinoLogger,
    private httpAdapterHost: HttpAdapterHost,
  ) {}

  catch(exception: UnprocessableEntityException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const code = exception.getStatus();

    this.loggerService.error(exception.stack);

    httpAdapter.reply(
      ctx.getResponse(),
      {
        code,
        msg: `${MESSAGES.UNPROCESSABLE_ENTITY}: ${exception.message}`,
      },
      code,
    );
  }
}
