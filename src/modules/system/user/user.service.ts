import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EXCEL_SERVICE, ExcelService } from '@/shared/excel';
import { Between, FindOptionsWhere, In, Like, Not, Repository } from 'typeorm';

import { ENTITY_DEL_FLAG, ENTITY_STATUS, MESSAGES } from '@/constants';
import { SysPostEntity, SysRoleEntity, SysUserEntity } from '@/database';
import { IFile } from '@/interfaces';
import { DelDTO } from '@/models';
import { ContextService } from '@/shared';
import { HashUtil } from '@/utils';

import {
  CreateUserDTO,
  FindUserPageDTO,
  ResetPasswordDTO,
  UpdateUserDTO,
} from './user.dto';
import { UserExportSerialize, UserTemplateSerialize } from './user.serialize';

@Injectable()
export class UserService {
  constructor(
    @Inject(EXCEL_SERVICE)
    private excelService: ExcelService,
    @InjectRepository(SysPostEntity)
    private postModel: Repository<SysPostEntity>,
    @InjectRepository(SysRoleEntity)
    private roleModel: Repository<SysRoleEntity>,
    @InjectRepository(SysUserEntity)
    private userModel: Repository<SysUserEntity>,
    private contextService: ContextService,
  ) {}

  async handleFindPage(dto: FindUserPageDTO) {
    const { pageNum, pageSize, beginDate, endDate, deptId, ...where } = dto;

    const conditions = {
      delFlag: ENTITY_DEL_FLAG.EXIST,
      createTime: beginDate ? Between(beginDate, endDate) : null,
      ...where,
    } as FindOptionsWhere<SysUserEntity>;

    const [list, total] = await this.userModel.findAndCount({
      relations: { dept: true },
      where:
        deptId && deptId !== '100'
          ? [
              {
                ...conditions,
                dept: {
                  id: deptId,
                },
              },
              {
                ...conditions,
                dept: {
                  ancestors: Like(`%,${deptId}%`),
                },
              },
            ]
          : {
              ...conditions,
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

  async handleCreate(dto: CreateUserDTO) {
    const { userName } = this.contextService.getPayload();
    const { postIds, roleIds, ...rest } = dto;

    const existUser = await this.userModel.findOneBy({
      userName: dto.userName,
    });

    if (existUser) {
      throw new BadRequestException(MESSAGES.USER_EXIST);
    }

    const password = await HashUtil.crypto(dto.password);
    const posts =
      postIds && postIds.length > 0
        ? await this.postModel.findBy({
            id: In(postIds),
          })
        : null;
    const roles =
      roleIds && roleIds.length > 0
        ? await this.roleModel.findBy({
            id: In(roleIds),
          })
        : null;

    await this.userModel.insert({
      ...rest,
      posts,
      roles,
      password,
      createBy: userName,
    });
  }

  async handleUpdate(id: number, dto: UpdateUserDTO) {
    const { userName } = this.contextService.getPayload();
    const { postIds, roleIds, ...rest } = dto;

    const existUser = await this.userModel.findOne({
      relations: { posts: true, roles: true },
      where: { id: id },
    });

    if (!existUser) {
      throw new BadRequestException(MESSAGES.USER_NOT_EXIST);
    }

    const posts = postIds?.length
      ? await this.postModel.findBy({
          id: In(postIds),
        })
      : null;
    const roles = roleIds?.length
      ? await this.roleModel.findBy({
          id: In(roleIds),
        })
      : null;
    const newUser = this.userModel.merge(existUser, {
      ...rest,
      posts,
      roles,
      updateBy: userName,
    });
    await this.userModel.save(newUser);
    // await this.userModel.update(id, {
    //   ...rest,
    //   posts,
    //   roles,
    //   updateBy: userName
    // })
  }

  async handleGetFormData(id?: string) {
    const posts = await this.postModel.findBy({
      status: ENTITY_STATUS.NORMAL,
    });
    const roles = await this.roleModel.findBy({
      delFlag: ENTITY_DEL_FLAG.EXIST,
      id: Not('1'),
    });

    const data = <
      {
        posts: SysPostEntity[];
        roles: SysRoleEntity[];
        postIds?: string[];
        roleIds?: string[];
      }
    >{
      posts,
      roles,
    };

    if (id) {
      const user = await this.userModel.findOne({
        relations: { posts: true, roles: true },
        where: { id: id },
      });

      data.postIds = user.posts.map((v) => v.id);
      data.roleIds = user.roles.map((v) => v.id);
    }

    return data;
  }

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    const list = await this.userModel.findBy({ id: In(ids) });

    for (const user of list) {
      // await this.userModel.update(user.id, {
      //   delFlag: ENTITY_DEL_FLAG.DELETE,
      //   posts: [],
      //   roles: []
      // })
      await this.userModel.save(
        this.userModel.merge(user, {
          delFlag: ENTITY_DEL_FLAG.DELETE,
          posts: [],
          roles: [],
        }),
      );
    }
  }

  async handleImportTemplate(file: IFile) {
    const data = await this.excelService.handleImport({
      sheetName: '用户',
      filePath: file.filepath,
      Cls: UserTemplateSerialize,
    });

    let success = 0;
    let fail = 0;

    for (const item of data) {
      const isExist = await this.checkIsExist(item.userName);

      if (isExist) {
        fail++;
      } else {
        await this.handleCreate({ roleIds: [], postIds: [], ...item });
        success++;
      }
    }

    return {
      success,
      fail,
    };
  }

  async handleExportTemplate() {
    return await this.excelService.handleCreate({
      sheetName: '用户',
      fileName: '用户模板',
      Cls: UserTemplateSerialize,
    });
  }

  async handleExportPage(dto: FindUserPageDTO) {
    const { list } = await this.handleFindPage(dto);

    return await this.excelService.handleExport({
      sheetName: '用户',
      fileName: '用户报表',
      Cls: UserExportSerialize,
      data: list,
    });
  }

  async handleResetPassword(id: number, dto: ResetPasswordDTO) {
    const existUser = await this.userModel.findOneBy({ id });

    if (!existUser) {
      throw new BadRequestException(MESSAGES.USER_NOT_EXIST);
    }

    const { userName } = this.contextService.getPayload();
    const password = await HashUtil.crypto(dto.password);

    await this.userModel.update(id, { password, updateBy: userName });
  }

  async handleToggleStatus(id: string) {
    const { userName } = this.contextService.getPayload();

    const existUser = await this.userModel.findOneBy({ id });

    if (!existUser) {
      throw new BadRequestException(MESSAGES.USER_NOT_EXIST);
    }

    await this.userModel.update(id, {
      status:
        existUser.status === ENTITY_STATUS.NORMAL
          ? ENTITY_STATUS.DISABLE
          : ENTITY_STATUS.NORMAL,
      updateBy: userName,
    });
  }

  private async checkIsExist(userName: string) {
    return await this.userModel.findOneBy({ userName });
  }
}
