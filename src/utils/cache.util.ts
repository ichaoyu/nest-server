import { CACHES } from '@/constants';

/**
 * 缓存工具
 */
export const CacheUtil = {
  /**
   * 获取会话标识
   * @param {string} tokenId 会话编号
   */
  getTokenKey: (tokenId: string) => `${CACHES.LOGIN_TOKEN_KEY}${tokenId}`,
  /**
   * 获取用户标识
   * @param {string} userId 用户编号
   */
  getUserKey: (userId: string) => `${CACHES.LOGIN_USER_KEY}${userId}`,
  /**
   * 获取字典标识
   * @param {string} dictType 字典类型
   */
  getDictKey: (dictType: string) => `${CACHES.SYS_DICT_KEY}${dictType}`,
  /**
   * 获取配置标识
   * @param {string} key 配置键名
   */
  getConfigKey: (key: string) => `${CACHES.SYS_CONFIG_KEY}${key}`,
};
