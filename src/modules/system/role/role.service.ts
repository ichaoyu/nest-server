import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EXCEL_SERVICE, ExcelService } from '@/shared/excel';
import { Between, In, Not, Repository } from 'typeorm';

import { ENTITY_DEL_FLAG, ENTITY_STATUS, MESSAGES } from '@/constants';
import { SysMenuEntity, SysRoleEntity, SysUserEntity } from '@/database';
import { DelDTO } from '@/models';
import { ContextService } from '@/shared';

import {
  AllocateDTO,
  CreateRoleDTO,
  FindAllocatedPageDTO,
  FindRolePageDTO,
  FindUnallocatedPageDTO,
  UpdateRoleDTO,
} from './role.dto';
import { RoleExportSerialize } from './role.serialize';

@Injectable()
export class RoleService {
  constructor(
    @Inject(EXCEL_SERVICE)
    private excelService: ExcelService,
    @InjectRepository(SysMenuEntity)
    private menuModel: Repository<SysMenuEntity>,
    @InjectRepository(SysRoleEntity)
    private roleModel: Repository<SysRoleEntity>,
    @InjectRepository(SysUserEntity)
    private userModel: Repository<SysUserEntity>,
    private contextService: ContextService,
  ) {}

  async handleFindPage(dto: FindRolePageDTO) {
    const { pageNum, pageSize, beginDate, endDate, ...where } = dto;

    const [list, total] = await this.roleModel.findAndCount({
      relations: {
        menus: true,
      },
      select: {
        menus: {
          id: true,
        },
      },
      where: {
        delFlag: ENTITY_DEL_FLAG.EXIST,
        createTime: beginDate ? Between(beginDate, endDate) : null,
        ...where,
      },
      order: {
        roleSort: 'ASC',
      },
      take: pageSize,
      skip: (pageNum - 1) * pageSize,
    });

    return {
      pageNum,
      pageSize,
      total,
      list,
    };
  }

  async handleFindAllocatedPage(id: number, dto: FindAllocatedPageDTO) {
    const { pageNum, pageSize, ...where } = dto;

    const [list, total] = await this.userModel.findAndCount({
      relations: { roles: true },
      where: {
        roles: { id: id },
        ...where,
      },
      skip: (pageNum - 1) * pageSize,
      take: pageSize,
    });

    return {
      pageNum,
      pageSize,
      total,
      list,
    };
  }

  async handleCancelAllocated(id: number, dto: DelDTO) {
    const { ids: userIds } = dto;

    const role = await this.roleModel.findOne({
      relations: { users: true },
      where: { id },
    });

    const users = role.users.filter((v) => !userIds.includes(v.id));

    await this.roleModel.update(id, { users });
  }

  async handleCreate(dto: CreateRoleDTO) {
    const { userName } = this.contextService.getPayload();
    const { menus, ...rest } = dto;

    const roleMenus =
      menus.length > 0
        ? await this.menuModel.find({
            select: { id: true },
            where: menus.map((v) => ({ id: v })),
          })
        : null;

    await this.roleModel.insert({
      ...rest,
      menus: roleMenus,
      createBy: userName,
    });
  }

  async handleUpdate(id: number, dto: UpdateRoleDTO) {
    const { userName } = this.contextService.getPayload();

    const role = await this.roleModel.findOne({
      relations: { menus: true },
      where: { id: id },
    });

    if (!role) {
      throw new BadRequestException(MESSAGES.ROLE_NOT_EXIST);
    }

    const { menus, ...rest } = dto;

    const roleMenus =
      menus.length > 0
        ? await this.menuModel.find({
            select: { id: true },
            where: menus.map((v) => ({ id: v })),
          })
        : null;

    await this.roleModel.save({
      ...role,
      ...rest,
      menus: roleMenus,
      updateBy: userName,
    });
  }

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    const list = await this.roleModel.find({
      relations: { menus: true },
      where: { id: In(ids) },
    });

    for (const role of list) {
      await this.roleModel.update(role.id, {
        delFlag: ENTITY_DEL_FLAG.DELETE,
        menus: [],
      });
    }
  }

  async handleExportPage(dto: FindRolePageDTO) {
    const { list } = await this.handleFindPage(dto);

    return await this.excelService.handleExport({
      sheetName: '角色',
      fileName: '角色报表',
      Cls: RoleExportSerialize,
      data: list,
    });
  }

  async handleToggleStatus(id: string) {
    const role = await this.roleModel.findOneBy({ id });

    if (!role) {
      throw new BadRequestException(MESSAGES.ROLE_NOT_EXIST);
    }

    role.status =
      role.status === ENTITY_STATUS.NORMAL
        ? ENTITY_STATUS.DISABLE
        : ENTITY_STATUS.NORMAL;

    await this.roleModel.save(role);
  }

  async handleFindUnallocatedPage(id: number, dto: FindUnallocatedPageDTO) {
    const { pageNum, pageSize, ...where } = dto;

    const allocatedUsers = await this.userModel.find({
      where: { roles: { id: id } },
      select: { id: true },
    });
    const allocatedUserIds = allocatedUsers.map((v) => v.id);

    const [list, total] = await this.userModel.findAndCount({
      where: {
        id: Not(In(allocatedUserIds)),
        ...where,
      },
      skip: (pageNum - 1) * pageSize,
      take: pageSize,
    });

    return {
      pageNum,
      pageSize,
      total,
      list,
    };
  }

  async handleAllocate(id: number, dto: AllocateDTO) {
    const { ids } = dto;

    const role = await this.roleModel.findOne({
      relations: { users: true },
      where: { id },
    });

    const oldUsers = role.users || [];
    const oldUserIds = oldUsers.map((v) => v.id);
    const newUserIds = ids.filter((v) => !oldUserIds.includes(v));
    const newUsers = await this.userModel.findBy({ id: In(newUserIds) });
    const users = [].concat(oldUsers, newUsers);

    await this.roleModel.update(id, { users });
  }
}
