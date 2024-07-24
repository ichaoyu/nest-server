import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

/**
 * 默认错误处理
 */
@Catch()
export class WsDefaultFilter extends BaseWsExceptionFilter {
  constructor(
    @InjectPinoLogger(WsDefaultFilter.name)
    private loggerService: PinoLogger,
  ) {
    super();
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToWs();
    const client = ctx.getClient<WebSocket>();

    const error =
      exception instanceof WsException ? exception.getError() : exception;
    const data =
      error instanceof Error
        ? {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
          }
        : error;

    this.loggerService.error(error);

    client.send(
      JSON.stringify({
        event: 'error',
        data,
      }),
    );
  }
}
