import { WebCategoryEntity } from '@/database';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import {
  CreateCategoryDTO,
  FindCategoryPageDTO,
  UpdateCategoryDTO,
} from './category.dto';
import { MESSAGES } from '@/constants';
import { DelDTO } from '@/models';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(WebCategoryEntity)
    private categoryModel: Repository<WebCategoryEntity>,
  ) {}

  /**
   * 获取分页列表
   * @param dto findPageDto
   * @returns
   */
  async handleFindPage(dto: FindCategoryPageDTO) {
    const { pageNum, pageSize, name } = dto;
    const [list, total] = await this.categoryModel.findAndCount({
      where: [{ name: name ? Like(`%${name}%`) : null }],
      order: {
        sort: 'ASC',
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
   * @param dto CreateCategoryDTO
   */
  async handleCreate(dto: CreateCategoryDTO) {
    const { name } = dto;
    const existConfig = await this.categoryModel.findOneBy({ name });
    if (existConfig) {
      throw new BadRequestException(MESSAGES.FLINK_EXIST);
    }
    await this.categoryModel.save(dto);
  }

  /**
   * 更新
   * @param id number id
   * @param dto UpdateCategoryDTO
   */
  async handleUpdate(id: number, dto: UpdateCategoryDTO) {
    const existCategory = await this.categoryModel.findOneBy({ id });
    if (!existCategory) {
      throw new BadRequestException(MESSAGES.NOT_FOUND);
    }
    await this.categoryModel.save({ ...existCategory, ...dto });
  }

  /**
   * 批量删除
   * @param dto DelDTO
   */
  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;
    await this.categoryModel.delete(ids);
  }
}
