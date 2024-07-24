import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { MESSAGES } from "@/constants";
import { SysMenuEntity, SysUserEntity } from "@/database";
import { IUserMenu } from "@/interfaces";
import { ContextService } from "@/shared";
import { HashUtil, ProxyUtil } from "@/utils";

import {
  UpdateCurrentUserBaseDTO,
  UpdateCurrentUserPasswordDTO,
} from "./current-user.dto";

@Injectable()
export class CurrentUserService {
  constructor(
    @InjectRepository(SysUserEntity)
    private userModel: Repository<SysUserEntity>,
    @InjectRepository(SysMenuEntity)
    private menuModel: Repository<SysMenuEntity>,
    private contextService: ContextService,
  ) {}

  async handleGetInfo() {
    const { roles, permissions, user } =
      this.contextService.getUserWithPermission();

    const result = {
      // menus: [] as IUserMenu[],
      roles: [] as string[],
      permissions,
      user,
    };

    if (roles?.length) {
      result.roles = roles.map((v) => v.roleKey);

      // if (user.id === "1") {
      //   const menus = await this.menuModel.find();
      //   result.menus = await this.transformMenus(menus);
      // } else {
      //   const menus = new Map();

      //   for (const role of roles) {
      //     if (role.menus?.length) {
      //       for (const menu of role.menus) {
      //         menus.set(menu.id, menu);
      //       }
      //     }
      //   }

      //   result.menus = await this.transformMenus(Object.values(menus));
      // }
    }

    return result;
  }

  async handleGetProfile() {
    const { userName } = this.contextService.getPayload();

    const { roles, dept, posts, ...rest } = await this.userModel.findOne({
      relations: {
        roles: true,
        dept: true,
        posts: true,
      },
      where: { userName },
    });

    const result = {
      ...rest,
      postGroup: posts.map((v) => v.postName).join(","),
      roleGroup: roles.map((v) => v.roleName).join(","),
      deptName: dept.deptName,
    };

    return result;
  }

  async handleUpdateBase(dto: UpdateCurrentUserBaseDTO) {
    const { userId, userName } = this.contextService.getPayload();

    await this.userModel.update(userId, { ...dto, updateBy: userName });
  }

  async handleUpdatePassword(dto: UpdateCurrentUserPasswordDTO) {
    const { userName } = this.contextService.getPayload();

    const user = await this.userModel
      .createQueryBuilder("user")
      .select("user")
      .addSelect("user.password")
      .where({
        userName,
      })
      .getOne();

    const isMatch = await HashUtil.compare(dto.oldPassword, user.password);

    if (!isMatch) {
      throw new BadRequestException(MESSAGES.PASSWORD_NOT_EQUAL);
    }

    const password = await HashUtil.crypto(dto.newPassword);

    await this.userModel.update(user.id, { password, updateBy: userName });
  }

  /**
   * 根据菜单列表生成用户菜单
   * @param {SysMenuEntity[]} menus 菜单列表
   */
  private async transformMenus(menus: SysMenuEntity[]) {
    // 过滤按钮权限
    const filteredMenus = menus.filter((v) => v.menuType !== "F");
    const data = new Set<IUserMenu>();

    for (const menu of filteredMenus) {
      let alwaysShow = false;
      let children = null;
      let path = menu.path;
      let redirect = menu.redirect;
      let component = "";
      let componentName = "";

      const childMenus = filteredMenus.filter((v) => v.parentId === menu.id);

      // 有子菜单时设置总是显示
      if (childMenus.length > 0) {
        alwaysShow = true;
        children = [];
      }

      // 父路由必须以 `/` 开始
      if (menu.parentId === "0" && !path.startsWith("/")) {
        path = `/${path}`;
      }

      // 重定向必须以 `/` 开始
      if (redirect && !redirect.startsWith("/")) {
        redirect = `/${redirect}`;
      }

      if (menu.component) {
        component = menu.component;
        componentName = ProxyUtil.case.pascalCase(menu.component);
      } else if (menu.parentId === "0") {
        component = "DefaultLayout";
      } else {
        component = "ParentLayout";
      }

      data.add({
        key: menu.id,
        parentKey: menu.parentId,
        path,
        name: "",
        redirect,
        component,
        componentName,
        meta: {
          title: menu.menuName,
          icon: menu.icon,
          sort: menu.orderNum,
          hidden: menu.visible === "1",
          noCache: menu.isCache === "1",
          alwaysShow,
        },
        children,
      });
    }

    return Array.from(data);
  }
}
