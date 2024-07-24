import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ENTITY_STATUS, ENTITY_VISIBLE, MESSAGES } from '@/constants';
import { SysMenuEntity } from '@/database';
import { DelDTO } from '@/models';
import { ContextService } from '@/shared';
import { TransformUtil } from '@/utils';

import { CreateMenuDTO, FindMenuListDTO, UpdateMenuDTO } from './menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(SysMenuEntity)
    private menuModel: Repository<SysMenuEntity>,
    private contextService: ContextService,
  ) {}

  async handleFindList(dto: FindMenuListDTO) {
    return await this.menuModel.find({
      order: {
        orderNum: 'ASC',
      },
      where: {
        ...dto,
      },
    });
  }

  async handleGetTree() {
    const data = await this.menuModel.find({
      where: { status: ENTITY_STATUS.NORMAL, visible: ENTITY_VISIBLE.YES },
    });

    return TransformUtil.listToTree(data, {
      title: 'menuName',
      key: 'id',
      parentKey: 'parentId',
    });
  }

  async handleCreate(dto: CreateMenuDTO) {
    const { userName } = this.contextService.getPayload();

    await this.menuModel.insert({ ...dto, createBy: userName });
  }

  async handleUpdate(id: string, dto: UpdateMenuDTO) {
    const { userName } = this.contextService.getPayload();

    const existMenu = await this.menuModel.findOneBy({ id });

    if (!existMenu) {
      throw new BadRequestException(MESSAGES.MENU_NOT_EXIST);
    }

    await this.menuModel.update(id, { ...dto, updateBy: userName });
  }

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    await this.menuModel.delete(ids);
  }
}
