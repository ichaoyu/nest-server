import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import {
  ENTITY_VISIBLE,
  ENTITY_CATEGORY_TYPE,
  ENTITY_TARGET_TYPE,
} from '@/constants';

/**
 * 网站目录表
 */
@Entity({ name: 'web_category' })
export class WebCategoryEntity {
  /**
   * 主键
   */
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: string;

  /**
   * 父级栏目
   */
  @Column({ name: 'pid' })
  pid: string;

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
  @Column({ name: 'content' })
  content: string;

  /**
   * 栏目名称
   */
  @Column({ name: 'name' })
  name: string;

  /**
   * 栏目标识
   */
  @Column({ name: 'pinyin' })
  pinyin: string;

  /**
   * 栏目路径
   */
  @Column({ name: 'path' })
  path: string;

  /**
   * 栏目描述
   */
  @Column({ name: 'description' })
  description: string;

  /**
   * 类型 0 栏目 1 页面
   */
  @Column({ name: 'type', type: 'enum', enum: ENTITY_CATEGORY_TYPE })
  type: string;

  /**
   * 网址
   */
  @Column({ name: 'url' })
  url: string;

  /**
   * 排序
   */
  @Column({ name: 'sort' })
  sort: string;

  /**
   * 打开方式 0 当前页面打开 1 新页面打开
   */
  @Column({ name: 'target', type: 'enum', enum: ENTITY_TARGET_TYPE })
  target: string;

  /**
   * 状态 0 显示 1隐藏
   */
  @Column({ name: 'status', type: 'enum', enum: ENTITY_VISIBLE })
  status: string;

  /**
   * 模型id
   */
  @Column({ name: 'mid' })
  mid: string;

  /**
   * 列表页模板
   */
  @Column({ name: 'list_view' })
  listView: string;

  /**
   * 详情页模板
   */
  @Column({ name: 'article_view' })
  articleView: string;

  /**
   * 创建时间
   */
  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  /**
   * 更新时间
   */
  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;
}
