import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EXCEL_SERVICE, ExcelService } from '@/shared/excel';
import { Between, Like, Repository } from 'typeorm';

import { SysLoginLogEntity } from '@/database';
import { DelDTO } from '@/models';

import { FindLoginLogPageDTO } from './login-log.dto';
import { LoginLogExportSerialize } from './login-log.serialize';

@Injectable()
export class LoginLogService {
  constructor(
    @Inject(EXCEL_SERVICE)
    private excelService: ExcelService,
    @InjectRepository(SysLoginLogEntity)
    private loginLogModel: Repository<SysLoginLogEntity>,
  ) {}

  async handleFindPage(dto: FindLoginLogPageDTO) {
    const {
      pageNum,
      pageSize,
      beginDate,
      endDate,
      loginIp,
      userName,
      ...where
    } = dto;

    const [list, total] = await this.loginLogModel.findAndCount({
      where: {
        ...where,
        userName: userName ? Like(`%${userName}%`) : null,
        loginIp: loginIp ? Like(`%${loginIp}%`) : null,
        loginDate: beginDate ? Between(beginDate, endDate) : null,
      },
      order: {
        loginDate: 'DESC',
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

  async handleExportPage(dto: FindLoginLogPageDTO) {
    const { list } = await this.handleFindPage(dto);
    return await this.excelService.handleExport({
      sheetName: '登录日志',
      fileName: '登录日志报表',
      Cls: LoginLogExportSerialize,
      data: list,
    });
  }

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    await this.loginLogModel.delete(ids);
  }

  async handleClear() {
    await this.loginLogModel.clear();
  }
}
