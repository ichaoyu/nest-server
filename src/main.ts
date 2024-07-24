import { randomUUID } from 'node:crypto';

import fastifyCookie from '@fastify/cookie';
import fastifyMultipart from '@fastify/multipart';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { WsAdapter } from '@nestjs/platform-ws';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import { EXTRAS } from './constants';
import { FastifyOnRequestHook } from './fastify';
import { IConfig } from './interfaces';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ genReqId: () => randomUUID() }),
    { bufferLogs: true },
  );
  const loggerService = app.get(Logger);
  const configService = app.get(ConfigService);
  const appConfig = configService.get<IConfig['app']>('app');

  app.enableCors();
  app.enableShutdownHooks();
  app.useLogger(loggerService);
  app.setGlobalPrefix(appConfig.apiPath);
  // @ts-ignore
  await app.register(fastifyCookie);
  // @ts-ignore
  await app.register(fastifyMultipart);

  const instance = app.getHttpAdapter().getInstance();
  instance.addHook('onRequest', FastifyOnRequestHook as any);

  // WebSocket
  const webSocketAdapter = new WsAdapter(app);
  app.useWebSocketAdapter(webSocketAdapter);

  const PORT = appConfig.port;
  const DOC_PATH = appConfig.docPath;
  const DOC_FILE = `${DOC_PATH}-json`;
  /**
   * 只有配置了 0.0.0.0 才能用本机 ip 访问，否则只能用 localhost 或 127.0.0.1 访问
   * @see https://www.imooc.com/article/7581
   */
  const ADDRESS = '0.0.0.0';
  const LOGGER_CONTEXT = 'NestApplication';

  if (DOC_PATH) {
    const config = new DocumentBuilder()
      .setTitle('Nest Restful API')
      .setDescription('Nest Restful API 模板接口文档')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(DOC_PATH, app, document);
  }

  await app.listen(PORT, ADDRESS, (err, address) => {
    const ADDR = address.replace(ADDRESS, EXTRAS.LOCAL_IP);

    loggerService.log(
      `应用接口地址 ${ADDR}${appConfig.apiPath}`,
      LOGGER_CONTEXT,
    );

    if (DOC_PATH) {
      loggerService.log(`接口文档地址 ${ADDR}${DOC_PATH}`, LOGGER_CONTEXT);
      loggerService.log(`接口文档数据 ${ADDR}${DOC_FILE}`, LOGGER_CONTEXT);
    }
  });
}
bootstrap();
