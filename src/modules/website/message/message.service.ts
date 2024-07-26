import { WebMessageEntity } from '@/database';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindMessagePageDTO } from './message.dto';
import { DelDTO } from '@/models';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(WebMessageEntity)
    private messageModel: Repository<WebMessageEntity>,
  ) {}

  /**
   * 获取分页列表
   * @param dto findPageDto
   * @returns
   */
  async handleFindPage(dto: FindMessagePageDTO) {
    const { pageNum, pageSize, ...rest } = dto;
    const [list, total] = await this.messageModel.findAndCount({
      where: {
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

  /**
   * 批量删除
   * @param dto DelDTO
   */
  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;
    await this.messageModel.delete(ids);
  }
}
