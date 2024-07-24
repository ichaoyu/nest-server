import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MESSAGES } from '@/constants';
import { WebSiteInfoEntity } from '@/database';
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
    // save方法会自动更新updateTime
    await this.siteModel.save({ ...dto, updateBy: userName });
    // update方法更新数据 需要手动更新updateTime
    // await this.siteModel.update(id, {
    //   ...dto,
    //   updateBy: userName,
    //   updateTime: new Date(),
    // });
  }
}
