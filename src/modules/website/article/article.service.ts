import { WebArticleEntity, WebTagEntity } from '@/database';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import {
  CreateArticleDTO,
  FindArticlePageDTO,
  UpdateArticleDto,
} from './article.dto';
import { MESSAGES } from '@/constants';
import { DelDTO } from '@/models';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(WebArticleEntity)
    private articleModel: Repository<WebArticleEntity>,
    @InjectRepository(WebTagEntity)
    private tagModel: Repository<WebTagEntity>,
  ) {}

  /**
   * 获取分页列表
   * @param dto findPageDto
   * @returns
   */
  async handleFindPage(dto: FindArticlePageDTO) {
    const { pageNum, pageSize, ...rest } = dto;
    const [list, total] = await this.articleModel.findAndCount({
      relations: { tags: true },
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
   * 新建
   * @param dto CreateArticleDTO
   */
  async handleCreate(dto: CreateArticleDTO) {
    const { title, tagIds, ...rest } = dto;
    const existConfig = await this.articleModel.findOneBy({ title });
    if (existConfig) {
      throw new BadRequestException(MESSAGES.FLINK_EXIST);
    }
    const tags =
      tagIds && tagIds.length > 0
        ? await this.tagModel.findBy({
            id: In(tagIds),
          })
        : null;
    console.log('tags: ', tags);
    await this.articleModel.save({ ...dto, tags });
  }

  /**
   * 更新
   * @param id number id
   * @param dto UpdateArticleDto
   */
  async handleUpdate(id: number, dto: UpdateArticleDto) {
    const existArticle = await this.articleModel.findOneBy({ id });
    if (!existArticle) {
      throw new BadRequestException(MESSAGES.NOT_FOUND);
    }
    const upArticle = { ...existArticle, ...dto };
    console.log('upArticle: ', upArticle);
    await this.articleModel.save(upArticle);
  }

  /**
   * 批量删除
   * @param dto DelDTO
   */
  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;
    await this.articleModel.delete(ids);
  }
}
