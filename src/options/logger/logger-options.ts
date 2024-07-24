import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { LoggerModuleAsyncParams } from 'nestjs-pino';
import { SysUtil } from '@/utils';

export const LOGGER_OPTIONS: LoggerModuleAsyncParams = {
  // @ts-ignore
  useFactory: (configService: ConfigService) => {
    return {
      pinoHttp: [
        {
          customErrorMessage: () => '[REQUEST_FAILED]',
          customSuccessMessage: () => '[REQUEST_SUCCEEDED]',
          customReceivedMessage: () => '[REQUEST_RECEIVED]',
          ...(SysUtil.isDevelopment
            ? {
                level: 'debug',
                quietReqLogger: true,
                transport: {
                  // target: join(__dirname, './logger-pretty.transport'),
                  target: 'pino-pretty',
                  options: {
                    colorize: true,
                    translateTime: 'SYS:yyyy/mm/dd HH:MM:ss.l',
                    singleLine: true,
                    ignore: 'pid,context,hostname',
                  },
                },
              }
            : {
                target: 'pino-roll',
                options: {
                  // level: 'info',
                  file: join('logs', 'log.txt'),
                  frequency: 'daily',
                  size: '10m',
                  mkdir: true,
                },
              }),
        },
      ],
    };
  },
  inject: [ConfigService],
};
