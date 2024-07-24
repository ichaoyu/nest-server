import { existsSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { IRequest, IUploadOptions } from '@/interfaces';

const defaultConfig: IUploadOptions = {
  tmpdir: join(tmpdir(), 'nest-upload-files'),
  preservePath: true,
  limits: {
    fileSize: 102400000, // 100mb
  },
};

/**
 * 文件装饰器
 */
export const Files = createParamDecorator(
  async (data: IUploadOptions, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<IRequest>();
    const config = Object.assign(defaultConfig, data);

    if (!existsSync(config.tmpdir)) {
      try {
        mkdirSync(config.tmpdir);
      } catch (error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    try {
      return await request.saveRequestFiles(config);
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  },
);
