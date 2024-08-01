import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EXCEL_SERVICE, ExcelService } from '@/shared/excel';
import { Repository } from 'typeorm';

import { ENTITY_STATUS, MESSAGES } from '@/constants';
import { SysDictDataEntity } from '@/database';
import { DelDTO } from '@/models';
import { ContextService } from '@/shared';

import {
  CreateDictDataDTO,
  FindDictDataPageDTO,
  UpdateDictDataDTO,
} from './dict-data.dto';
import { DictDataExportSerialize } from './dict-data.serialize';

@Injectable()
export class DictDataService {
  constructor(
    @Inject(EXCEL_SERVICE)
    private excelService: ExcelService,
    @InjectRepository(SysDictDataEntity)
    private dictDataModel: Repository<SysDictDataEntity>,
    private contextService: ContextService,
  ) {}

  async handleFindPage(dto: FindDictDataPageDTO) {
    const { pageNum, pageSize, ...where } = dto;

    const [list, total] = await this.dictDataModel.findAndCount({
      where: {
        ...where,
      },
      order: {
        dictSort: 'ASC',
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

  async handleGetList(dictType: string) {
    return await this.dictDataModel.findBy({
      dictType,
      status: ENTITY_STATUS.NORMAL,
    });
  }

  async handleCreate(dto: CreateDictDataDTO) {
    const { dictValue, dictType } = dto;
    const { userName } = this.contextService.getPayload();

    const existDictData = await this.dictDataModel.findOneBy({
      dictValue,
      dictType,
    });

    if (existDictData) {
      throw new BadRequestException(MESSAGES.DICT_DATA_EXIST);
    }

    await this.dictDataModel.insert({
      ...dto,
      createBy: userName,
    });
  }

  async handleUpdate(id: number, dto: UpdateDictDataDTO) {
    const { userName } = this.contextService.getPayload();

    const existDictData = await this.dictDataModel.findOneBy({ id });

    if (!existDictData) {
      throw new BadRequestException(MESSAGES.DICT_DATA_NOT_EXIST);
    }

    await this.dictDataModel.update(id, { ...dto, updateBy: userName });
  }

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    await this.dictDataModel.delete(ids);
  }

  async handleExportPage(dto: FindDictDataPageDTO) {
    const { list } = await this.handleFindPage(dto);

    return await this.excelService.handleExport({
      sheetName: '字典数据',
      fileName: '字典数据报表',
      Cls: DictDataExportSerialize,
      data: list,
    });
  }
}
