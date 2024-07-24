import { BadRequestException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { isEmpty } from 'lodash-unified';
import { Systeminformation } from 'systeminformation';
import UAParser from 'ua-parser-js';

import { EXTRAS } from '@/constants';

import { HttpUtil } from './http.util';
import { ProxyUtil } from './proxy.util';

/**
 * 系统工具
 */
export const SysUtil = {
  /**
   * 是否是执行测试
   */
  isTesting: process.env.NODE_ENV === 'testing',
  /**
   * 是否是执行开发
   */
  isDevelopment: process.env.NODE_ENV === 'development',
  /**
   * 是否是执行生产
   */
  isProduction: process.env.NODE_ENV === 'production',
  /**
   * 本地IP V4
   */
  localIP4: async () => {
    const network = await getDefaultNetwork();

    return network.ip4;
  },
  /**
   * 本地IP V6
   * @returns
   */
  localIP6: async () => {
    const network = await getDefaultNetwork();

    return network.ip6;
  },
  /**
   * 是否是本地IP
   * @param {string} ip IP地址
   */
  isLocalIP: async (ip: string) => {
    const internalIP = await SysUtil.localIP4();

    if (ip.includes(internalIP) || ip.includes(EXTRAS.LOCAL_IP)) {
      return true;
    }
    return false;
  },
  /**
   * 解析IP地址
   * @param {string} ip IP地址
   */
  parseIP: async (ip: string) => {
    if (ip === null) {
      return EXTRAS.DEFAULT_IP;
    }

    const isLocalIP = await SysUtil.isLocalIP(ip);

    return isLocalIP ? EXTRAS.LOCAL_IP : ip;
  },
  /**
   * 解析用户代理字符串
   * @param {string} ua 用户代理字符串
   */
  parseUA: (ua: string) => {
    const uaParser = new UAParser(ua, {
      browser: [
        [/(apifox)\/([\w\.]+)/i],
        [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION],
      ],
    });

    return uaParser.getResult();
  },
  /**
   * 解析地址
   * @param {string} ip IP地址
   */
  parseAddress: async (ip: string) => {
    const isLocalIP = await SysUtil.isLocalIP(ip);

    if (isLocalIP) {
      return EXTRAS.LOCAL_IP_TEXT;
    }

    const { data } = await HttpUtil.client
      .get(`${EXTRAS.ADDR_URL}`, {
        params: { ip },
      })
      .catch((error: AxiosError) => {
        throw new BadRequestException(error.response.data);
      });

    if (isEmpty(data.data.address)) {
      return EXTRAS.DEFAULT_ADDR;
    }

    const [country, province, city, operation] = data.data.address
      .split(' ')
      .filter((v) => v !== '');

    return `${province} ${city}`;
  },
};

/**
 * 获取默认网路信息
 */
async function getDefaultNetwork(): Promise<Systeminformation.NetworkInterfacesData> {
  // @ts-ignore
  return await ProxyUtil.si.networkInterfaces('default');
}
