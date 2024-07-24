"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _nodecrypto = require("node:crypto");
const _cookie = /*#__PURE__*/ _interop_require_default(require("@fastify/cookie"));
const _multipart = /*#__PURE__*/ _interop_require_default(require("@fastify/multipart"));
const _config = require("@nestjs/config");
const _core = require("@nestjs/core");
const _platformfastify = require("@nestjs/platform-fastify");
const _platformws = require("@nestjs/platform-ws");
const _swagger = require("@nestjs/swagger");
const _nestjspino = require("nestjs-pino");
const _appmodule = require("./app.module");
const _constants = require("./constants");
const _fastify = require("./fastify");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule, new _platformfastify.FastifyAdapter({
        genReqId: ()=>(0, _nodecrypto.randomUUID)()
    }), {
        bufferLogs: true
    });
    const loggerService = app.get(_nestjspino.Logger);
    const configService = app.get(_config.ConfigService);
    const appConfig = configService.get('app');
    app.enableCors();
    app.enableShutdownHooks();
    app.useLogger(loggerService);
    app.setGlobalPrefix(appConfig.apiPath);
    // @ts-ignore
    await app.register(_cookie.default);
    // @ts-ignore
    await app.register(_multipart.default);
    const instance = app.getHttpAdapter().getInstance();
    instance.addHook('onRequest', _fastify.FastifyOnRequestHook);
    // WebSocket
    const webSocketAdapter = new _platformws.WsAdapter(app);
    app.useWebSocketAdapter(webSocketAdapter);
    const PORT = appConfig.port;
    const DOC_PATH = appConfig.docPath;
    const DOC_FILE = `${DOC_PATH}-json`;
    /**
   * 只有配置了 0.0.0.0 才能用本机 ip 访问，否则只能用 localhost 或 127.0.0.1 访问
   * @see https://www.imooc.com/article/7581
   */ const ADDRESS = '0.0.0.0';
    const LOGGER_CONTEXT = 'NestApplication';
    if (DOC_PATH) {
        const config = new _swagger.DocumentBuilder().setTitle('Nest Restful API').setDescription('Nest Restful API 模板接口文档').setVersion('1.0').addBearerAuth().build();
        const document = _swagger.SwaggerModule.createDocument(app, config);
        _swagger.SwaggerModule.setup(DOC_PATH, app, document);
    }
    await app.listen(PORT, ADDRESS, (err, address)=>{
        const ADDR = address.replace(ADDRESS, _constants.EXTRAS.LOCAL_IP);
        loggerService.log(`应用接口地址 ${ADDR}${appConfig.apiPath}`, LOGGER_CONTEXT);
        if (DOC_PATH) {
            loggerService.log(`接口文档地址 ${ADDR}${DOC_PATH}`, LOGGER_CONTEXT);
            loggerService.log(`接口文档数据 ${ADDR}${DOC_FILE}`, LOGGER_CONTEXT);
        }
    });
}
bootstrap();

//# sourceMappingURL=main.js.map