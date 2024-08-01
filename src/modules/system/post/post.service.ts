import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EXCEL_SERVICE, ExcelService } from '@/shared/excel';
import { In, Repository } from 'typeorm';

import { MESSAGES } from '@/constants';
import { SysPostEntity } from '@/database';
import { DelDTO } from '@/models';
import { ContextService } from '@/shared';

import { CreatePostDTO, FindPostPageDTO, UpdatePostDTO } from './post.dto';
import { PostExportSerialize } from './post.serialize';

@Injectable()
export class PostService {
  constructor(
    @Inject(EXCEL_SERVICE)
    private excelService: ExcelService,
    @InjectRepository(SysPostEntity)
    private postModel: Repository<SysPostEntity>,
    private contextService: ContextService,
  ) {}

  async handleCreate(dto: CreatePostDTO) {
    const { userName } = this.contextService.getPayload();

    await this.postModel.insert({ ...dto, createBy: userName });
  }

  async handleUpdate(id: number, dto: UpdatePostDTO) {
    const { userName } = this.contextService.getPayload();

    const existPost = await this.postModel.findOneBy({ id });

    if (!existPost) {
      throw new BadRequestException(MESSAGES.POST_NOT_EXIST);
    }

    await this.postModel.update(id, { ...dto, updateBy: userName });
  }

  async handleFindPage(dto: FindPostPageDTO) {
    const { pageNum, pageSize, ...rest } = dto;

    const [list, total] = await this.postModel.findAndCount({
      where: {
        ...rest,
      },
      order: {
        postSort: 'ASC',
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

  async handleDeleteMany(dto: DelDTO) {
    const { ids } = dto;

    const list = await this.postModel.find({
      relations: { users: true },
      where: { id: In(ids) },
    });

    for (const post of list) {
      await this.postModel.update(post.id, { users: [] });
    }

    await this.postModel.delete(ids);
  }

  async handleExportPage(dto: FindPostPageDTO) {
    const { list } = await this.handleFindPage(dto);

    return await this.excelService.handleExport({
      sheetName: '岗位',
      fileName: '岗位报表',
      Cls: PostExportSerialize,
      data: list,
    });
  }
}
