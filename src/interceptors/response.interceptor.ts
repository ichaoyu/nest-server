import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
  Scope,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';

import { MESSAGES } from '@/constants';
import { IRequest, IResponse } from '@/interfaces';

/**
 * 响应拦截器
 */
@Injectable({
  scope: Scope.REQUEST,
})
export class ResponseInterceptor implements NestInterceptor {
  constructor(private configService: ConfigService) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest<IRequest>();
    const apiPath = this.configService.get<string>('app.apiPath');
    const isApi = request.url.includes(apiPath);

    if (!isApi) {
      return next.handle();
    }
    if (request.method === 'POST') {
      const response = context.switchToHttp().getResponse<IResponse>();
      response.status(200);
    }

    return next.handle().pipe(
      map((data) => ({
        timestamp: Date.now(),
        code: HttpStatus.OK,
        msg: MESSAGES.REQUEST_OK,
        data,
      })),
    );
  }
}
