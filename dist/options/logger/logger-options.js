"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LOGGER_OPTIONS", {
    enumerable: true,
    get: function() {
        return LOGGER_OPTIONS;
    }
});
const _path = require("path");
const _config = require("@nestjs/config");
const _utils = require("../../utils");
const LOGGER_OPTIONS = {
    // @ts-ignore
    useFactory: (configService)=>{
        return {
            pinoHttp: [
                {
                    customErrorMessage: ()=>'[REQUEST_FAILED]',
                    customSuccessMessage: ()=>'[REQUEST_SUCCEEDED]',
                    customReceivedMessage: ()=>'[REQUEST_RECEIVED]',
                    ..._utils.SysUtil.isDevelopment ? {
                        level: 'debug',
                        quietReqLogger: true,
                        transport: {
                            // target: join(__dirname, './logger-pretty.transport'),
                            target: 'pino-pretty',
                            options: {
                                colorize: true,
                                translateTime: 'SYS:yyyy/mm/dd HH:MM:ss.l',
                                singleLine: true,
                                ignore: 'pid,context,hostname'
                            }
                        }
                    } : {
                        target: 'pino-roll',
                        options: {
                            // level: 'info',
                            file: (0, _path.join)('logs', 'log.txt'),
                            frequency: 'daily',
                            size: '10m',
                            mkdir: true
                        }
                    }
                }
            ]
        };
    },
    inject: [
        _config.ConfigService
    ]
};

//# sourceMappingURL=logger-options.js.map