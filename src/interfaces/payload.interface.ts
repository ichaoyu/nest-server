/**
 * 载荷接口
 */
export interface IPayload {
  /**
   * 用户编号
   */
  userId: string;
  /**
   * 用户账号
   */
  userName: string;
  /**
   * 会话编号
   */
  sub: string;

  /**
   * 签发时间，精确到秒
   */
  iat: number;

  /**
   * 过期时间，精确到秒
   */
  exp: number;
}
