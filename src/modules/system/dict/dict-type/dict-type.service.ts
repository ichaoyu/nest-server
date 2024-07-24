import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EXCEL_SERVICE, ExcelService } from '@/shared/excel';
import { Repository } from 'typeorm';

import { MESSAGES } from '@/constants';
import { SysDictTypeEntity } from '@/database';
import { DelDTO } from '@/models';
import { ContextService } from '@/shared';

import {
  CreateDictTypeDTO,
  FindDictTypePageDTO,
  UpdateDictTypeDTO,
} from './dict-type.dto';
import { DictTypeExportSerialize } from './dict-type.serialize';

@Injectable()
export class DictTypeService {
  constructor(
    @Inject(EXCEL_SERVICE)
    private excelService: ExcelService,
    @InjectRepository(SysDictTypeEntity)
    private dictTypeModel: Repository<SysDictTypeEntity>,
    private contextService: ContextService,
  ) {}

  async handleFindPage(dto: FindDictTypePageDTO) {
    const { pageNum, pageSize, ...where } = dto;

    const [list, total] = await this.dictTypeModel.findAndCount({
      where: {
        ...where,
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

  async handleCreate(dto: CreateDictTypeDTO) {
    const { dictType } = dto;
    const { userName } = this.contextService.getPayload();

    const existDictType = await this.dictTypeModel.findOneBy({ dictType });

    if (existDictType) {
      throw new BadRequestException(MESSAGES.DICT_TYPE_EXIST);
    }

    await this.dictTypeModel.insert({ ...dto, createBy: userName });
  }

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    await this.dictTypeModel.delete(ids);
  }

  async handleUpdate(id: string, dto: UpdateDictTypeDTO) {
    const { userName } = this.contextService.getPayload();

    const existDictType = await this.dictTypeModel.findOneBy({ id });

    if (!existDictType) {
      throw new BadRequestException(MESSAGES.DICT_TYPE_NOT_EXIST);
    }

    await this.dictTypeModel.update(id, { ...dto, updateBy: userName });
  }

  async handleGetDictType(id: string) {
    return await this.dictTypeModel.findOneBy({ id });
  }

  async handleExportPage(dto: FindDictTypePageDTO) {
    const { list } = await this.handleFindPage(dto);

    return await this.excelService.handleExport({
      sheetName: '字典类型',
      fileName: '字典类型报表',
      Cls: DictTypeExportSerialize,
      data: list,
    });
  }
}
