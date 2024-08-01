import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { ENTITY_DEL_FLAG, ENTITY_STATUS, MESSAGES } from '@/constants';
import { SysDeptEntity } from '@/database';
import { DelDTO } from '@/models';
import { ContextService } from '@/shared';
import { TransformUtil } from '@/utils';

import { CreateDeptDTO, FindDeptListDTO, UpdateDeptDTO } from './dept.dto';

@Injectable()
export class DeptService {
  constructor(
    @InjectRepository(SysDeptEntity)
    private deptModel: Repository<SysDeptEntity>,
    private contextService: ContextService,
  ) {}

  async handleFindList(dto: FindDeptListDTO) {
    const { ...where } = dto;

    return await this.deptModel.find({
      where: {
        delFlag: ENTITY_DEL_FLAG.EXIST,
        ...where,
      },
      order: {
        orderNum: 'ASC',
      },
    });
  }

  async handleGetTree() {
    const data = await this.deptModel.find({
      where: {
        delFlag: ENTITY_DEL_FLAG.EXIST,
        status: ENTITY_STATUS.NORMAL,
      },
    });

    return TransformUtil.listToTree(data, {
      title: 'deptName',
      key: 'id',
      parentKey: 'parentId',
    });
  }

  async handleCreate(dto: CreateDeptDTO) {
    const { parentId } = dto;
    const { userName } = this.contextService.getPayload();

    const parentDept = await this.deptModel.findOneBy({ id: parentId });

    if (!parentDept) {
      throw new BadRequestException(MESSAGES.PARENT_DEPT_NOT_EXIST);
    }

    await this.deptModel.insert({
      ...dto,
      ancestors: `${parentDept.ancestors},${parentDept.id}`,
      createBy: userName,
    });
  }

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    const list = await this.deptModel.find({
      relations: { roles: true },
      where: { id: In(ids) },
    });

    for (const dept of list) {
      await this.deptModel.update(dept.id, {
        delFlag: ENTITY_DEL_FLAG.DELETE,
        roles: [],
      });
    }
  }

  async handleUpdate(id: number, dto: UpdateDeptDTO) {
    const { parentId } = dto;
    const { userName } = this.contextService.getPayload();

    const [dept, parentDept] = await Promise.all([
      this.deptModel.findOneBy({ id }),
      this.deptModel.findOneBy({ id: parentId }),
    ]);

    if (!dept) {
      throw new BadRequestException(MESSAGES.DEPT_NOT_EXIST);
    }

    if (!parentDept) {
      throw new BadRequestException(MESSAGES.PARENT_DEPT_NOT_EXIST);
    }

    await this.deptModel.update(id, {
      ...dto,
      ancestors:
        dept.parentId !== parentId
          ? `${parentDept.ancestors},${parentDept.id}`
          : dept.ancestors,
      updateBy: userName,
    });
  }
}
