import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EXCEL_SERVICE, ExcelService } from '@/shared/excel';
import { Between, Like, Repository } from 'typeorm';

import { SysOperLogEntity } from '@/database';
import { DelDTO } from '@/models';

import { FindOperLogPageDTO } from './oper-log.dto';
import { OperLogExportSerialize } from './oper-log.serialize';

@Injectable()
export class OperLogService {
  constructor(
    @Inject(EXCEL_SERVICE)
    private excelService: ExcelService,
    @InjectRepository(SysOperLogEntity)
    private operLogModel: Repository<SysOperLogEntity>,
  ) {}

  async handleFindPage(dto: FindOperLogPageDTO) {
    const {
      pageNum,
      pageSize,
      beginDate,
      endDate,
      operIp,
      operName,
      title,
      ...where
    } = dto;

    const [list, total] = await this.operLogModel.findAndCount({
      where: {
        ...where,
        title: title ? Like(`%${title}%`) : null,
        operIp: operIp ? Like(`%${operIp}%`) : null,
        operName: operName ? Like(`%${operName}%`) : null,
        operTime: beginDate ? Between(beginDate, endDate) : null,
      },
      order: {
        operTime: 'DESC',
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

  async handleExportPage(dto: FindOperLogPageDTO) {
    const { list } = await this.handleFindPage(dto);
    return await this.excelService.handleExport({
      sheetName: '操作日志',
      fileName: '操作日志报表',
      Cls: OperLogExportSerialize,
      data: list,
    });
  }

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    await this.operLogModel.delete(ids);
  }

  async handleClear() {
    await this.operLogModel.clear();
  }
}
