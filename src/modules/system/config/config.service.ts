import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EXCEL_SERVICE, ExcelService } from '@/shared/excel';
import { Between, Repository } from 'typeorm';

import { MESSAGES } from '@/constants';
import { SysConfigEntity } from '@/database';
import { DelDTO } from '@/models';
import { ContextService } from '@/shared';

import {
  CreateConfigDTO,
  FindConfigPageDTO,
  UpdateConfigDTO,
} from './config.dto';
import { ConfigExportSerialize } from './config.serialize';

@Injectable()
export class ConfigService {
  constructor(
    @Inject(EXCEL_SERVICE)
    private excelService: ExcelService,
    @InjectRepository(SysConfigEntity)
    private configModel: Repository<SysConfigEntity>,
    private contextService: ContextService,
  ) {}

  async handleFindPage(dto: FindConfigPageDTO) {
    const { pageNum, pageSize, beginDate, endDate, ...rest } = dto;

    const [list, total] = await this.configModel.findAndCount({
      where: {
        createTime: beginDate ? Between(beginDate, endDate) : null,
        ...rest,
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

  async handleGetValue(key: string) {
    return await this.configModel.findOneBy({ configKey: key });
  }

  async handleCreate(dto: CreateConfigDTO) {
    const { configKey } = dto;
    const { userName } = this.contextService.getPayload();

    const existConfig = await this.configModel.findOneBy({ configKey });

    if (existConfig) {
      throw new BadRequestException(MESSAGES.CONFIG_EXIST);
    }

    await this.configModel.insert({
      ...dto,
      createBy: userName,
    });
  }

  async handleUpdate(id: string, dto: UpdateConfigDTO) {
    const { userName } = this.contextService.getPayload();

    const existConfig = await this.configModel.findOneBy({ id });

    if (!existConfig) {
      throw new BadRequestException(MESSAGES.CONFIG_NOT_EXIST);
    }

    await this.configModel.update(id, { ...dto, updateBy: userName });
  }

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    await this.configModel.delete(ids);
  }

  async handleExportPage(dto: FindConfigPageDTO) {
    const { list } = await this.handleFindPage(dto);

    return await this.excelService.handleExport({
      sheetName: '配置',
      fileName: '配置报表',
      Cls: ConfigExportSerialize,
      data: list,
    });
  }
}
