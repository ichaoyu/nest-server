import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EXCEL_SERVICE, ExcelService } from '@/shared/excel';
import { Between, Repository } from 'typeorm';

import { MESSAGES } from '@/constants';
import { WebSiteInfoEntity } from '@/database';
import { DelDTO } from '@/models';
import { ContextService } from '@/shared';
import { UpdateConfigDTO } from './site.dto';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(WebSiteInfoEntity)
    private siteModel: Repository<WebSiteInfoEntity>,
    private contextService: ContextService,
  ) {}

  // 获取网站配置
  async handleGetSiteInfo(id: string) {
    const info = await this.siteModel.findOneBy({ id });
    return info;
  }

  // 更新网站配置
  async handleUpdateSiteInfo(id: string, dto: UpdateConfigDTO) {
    const { userName } = this.contextService.getPayload();
    const existConfig = await this.siteModel.findOneBy({ id });
    if (!existConfig) {
      throw new BadRequestException(MESSAGES.CONFIG_NOT_EXIST);
    }
    await this.siteModel.update(id, { ...dto, updateBy: userName });
  }
}
