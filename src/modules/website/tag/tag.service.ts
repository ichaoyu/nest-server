import { WebTagEntity } from '@/database';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateTagDTO, FindTagPageDTO } from './tag.dto';
import { MESSAGES } from '@/constants';
import { DelDTO } from '@/models';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(WebTagEntity)
    private tagModel: Repository<WebTagEntity>,
  ) {}

  /**
   * 获取分页列表
   * @param dto findPageDto
   * @returns
   */
  async handleFindPage(dto: FindTagPageDTO) {
    const { pageNum, pageSize, keywords } = dto;
    const [list, total] = await this.tagModel.findAndCount({
      where: [{ name: keywords ? Like(`%${keywords}%`) : null }],
      order: {
        updateTime: 'DESC',
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

  /**
   * 新建
   * @param dto CreateTagDTO
   */
  async handleCreate(dto: CreateTagDTO) {
    const { name } = dto;
    const existConfig = await this.tagModel.findOneBy({ name });
    if (existConfig) {
      throw new BadRequestException(MESSAGES.FLINK_EXIST);
    }
    await this.tagModel.save(dto);
  }

  /**
   * 更新
   * @param id string id
   * @param dto CreateTagDTO
   */
  async handleUpdate(id: number, dto: CreateTagDTO) {
    const existTag = await this.tagModel.findOneBy({ id });
    if (!existTag) {
      throw new BadRequestException(MESSAGES.NOT_FOUND);
    }
    await this.tagModel.save({ ...existTag, ...dto });
  }

  /**
   * 批量删除
   * @param dto DelDTO
   */
  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;
    await this.tagModel.delete(ids);
  }
}
