import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost } from '@nestjs/core';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { MESSAGES } from '@/constants';
import { IRequest } from '@/interfaces';

/**
 * 资源不存在错误处理
 */
@Catch(NotFoundException)
export class NotFoundFilter implements ExceptionFilter {
  constructor(
    @InjectPinoLogger(NotFoundFilter.name)
    private loggerService: PinoLogger,
    private configService: ConfigService,
    private httpAdapterHost: HttpAdapterHost,
  ) {}

  catch(exception: NotFoundException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const apiPath = this.configService.get<string>('app.apiPath');
    const ctx = host.switchToHttp();
    const code = exception.getStatus();
    const req = ctx.getRequest<IRequest>();
    const isApi = req.url.includes(apiPath);

    if (isApi) {
      this.loggerService.error(exception.stack);
      const msg = `${MESSAGES.NOT_FOUND}: ${exception.message}`;

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
}
