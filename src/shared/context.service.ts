import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

import { IPayload, IRequest } from '@/interfaces';

import { SharedService } from './shared.service';

/**
 * 上下文服务
 * @description 为请求上下文提供各种操作
 */
@Injectable({
  scope: Scope.REQUEST,
})
export class ContextService {
  constructor(
    @Inject(REQUEST)
    private request: IRequest,
    private sharedService: SharedService,
  ) {}
  /**
   * 获取 IP
   */
  getIP() {
    return this.request.ip;
  }

  /**
   * 获取 UA
   */
  getUA() {
    return this.request.headers['user-agent'];
  }

  /**
   * 在请求上下文设置载荷
   * @param {IPayload} payload 载荷
   */
  setPayload(payload: IPayload) {
    this.request.payload = payload;
  }

  /**
   * 在请求上下文获取载荷
   */
  getPayload(): IPayload {
    return this.request.payload;
  }

  /**
   * 在请求上下文设置用户
   * @param {IPayload} payload JWT 载荷
   */
  async setUser(payload: IPayload) {
    const user =
      await this.sharedService.getUserWithDeptRolesByPayload(payload);

    this.request.user = user;
  }

  /**
   * 从请求上下文获取用户
   */
  getUser() {
    return this.request.user;
  }

  /**
   * 从请求上下文获取用户带权限
   */
  getUserWithPermission() {
    const user = this.getUser();

    return this.sharedService.getUserWithPermission(user);
  }
}
