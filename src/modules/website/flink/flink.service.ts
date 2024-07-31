import { WebFlinkEntity } from '@/database';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateFlinkDTO, FindFlinkPageDTO } from './flink.dto';
import { MESSAGES } from '@/constants';
import { DelDTO } from '@/models';

@Injectable()
export class FlinkService {
  constructor(
    @InjectRepository(WebFlinkEntity)
    private flinkModel: Repository<WebFlinkEntity>,
  ) {}

  /**
   * 获取分页列表
   * @param dto findPageDto
   * @returns
   */
  async handleFindPage(dto: FindFlinkPageDTO) {
    const { pageNum, pageSize, keywords, ...where } = dto;
    const [list, total] = await this.flinkModel.findAndCount({
      where: [
        { title: keywords ? Like(`%${keywords}%`) : null },
        { link: keywords ? Like(`%${keywords}%`) : null },
      ],
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

  /**
   * 新建
   * @param dto CreateFlinkDTO
   */
  async handleCreate(dto: CreateFlinkDTO) {
    const { title } = dto;
    const existConfig = await this.flinkModel.findOneBy({ title });
    if (existConfig) {
      throw new BadRequestException(MESSAGES.FLINK_EXIST);
    }
    await this.flinkModel.save(dto);
  }

  /**
   * 更新
   * @param id string id
   * @param dto CreateFlinkDTO
   */
  async handleUpdate(id: string, dto: CreateFlinkDTO) {
    const existFlink = await this.flinkModel.findOneBy({ id });
    console.log('existFlink: ', existFlink);
    if (!existFlink) {
      throw new BadRequestException(MESSAGES.NOT_FOUND);
    }
    await this.flinkModel.update(id, dto);
    // await this.flinkModel.save({ ...existFlink, ...dto });
  }

  /**
   * 批量删除
   * @param dto DelDTO
   */
  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;
    await this.flinkModel.delete(ids);
  }
}
