import development from './config.development';
import production from './config.production';

const { NODE_ENV } = process.env;
const CONFIG_MAP = { development, production };

// 当环境变量匹配不上时采用本地开发配置
export default CONFIG_MAP[NODE_ENV] || CONFIG_MAP.development;
