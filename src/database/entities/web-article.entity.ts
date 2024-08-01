import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ENTITY_VISIBLE } from '@/constants';
import { WebTagEntity } from '.';

/**
 * 文章表
 */
@Entity({ name: 'web_article' })
export class WebArticleEntity {
  /**
   * 主键
   */
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  /**
   * 栏目id
   */
  @Column({ name: 'cid' })
  cid: string;

  /**
   * 其他栏目id
   */
  @Column({ name: 'sub_cid' })
  subCid: string;

  /**
   * 标题
   */
  @Column({ name: 'title' })
  title: string;

  /**
   * 短标题
   */
  @Column({ name: 'short_title' })
  short_title: string;

  /**
   * 1头条 2推荐 3轮播 4热门
   */
  @Column({ name: 'attr' })
  attr: string;

  /**
   * seo标题
   */
  @Column({ name: 'seo_title' })
  seoTitle: string;

  /**
   * seo关键字
   */
  @Column({ name: 'seo_keywords' })
  seoKeywords: string;

  /**
   * seo描述
   */
  @Column({ name: 'seo_description' })
  seo_description: string;

  /**
   * 来源
   */
  @Column({ name: 'source' })
  source: string;

  /**
   * 作者
   */
  @Column({ name: 'author' })
  author: string;

  /**
   * 文章简述
   */
  @Column({ name: 'description' })
  description: string;

  /**
   * 缩略图
   */
  @Column({ name: 'img' })
  img: string;

  /**
   * 文章内容
   */
  @Column({ name: 'content' })
  content: string;

  /**
   * 状态 0 发布 1不发布
   */
  @Column({ name: 'status', type: 'enum', enum: ENTITY_VISIBLE })
  status: string;

  /**
   * 浏览量
   */
  @Column({ name: 'pv' })
  pv: string;

  /**
   * 外链
   */
  @Column({ name: 'link' })
  link: string;

  /**
   * 创建时间
   */
  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  /**
   * 更新时间
   */
  @UpdateDateColumn({ name: 'update_time', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  /**
   * 关联标签
   */
  @ManyToMany(() => WebTagEntity, (tag) => tag.article_id)
  @JoinTable({
    name: 'web_article_tag',
    joinColumn: { name: 'article_id' },
    inverseJoinColumn: { name: 'tag_id' },
  })
  tag_id: WebTagEntity[];
}
