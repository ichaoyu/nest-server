import * as caseAnything from 'case-anything';
import { nanoid } from 'nanoid';
import { getProperties } from 'properties-file';
import systeminformation from 'systeminformation';

/**
 * 代理工具
 */
export const ProxyUtil = {
  /**
   * 字符串命名转换
   */
  case: caseAnything,
  /**
   * 系统信息
   */
  si: systeminformation,
  /**
   * ID 生成器
   */
  generateID: nanoid,
  /**
   * `.properties` 解析
   */
  getProperties: getProperties,
};
