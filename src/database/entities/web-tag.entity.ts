import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  Column,
  JoinColumn,
} from 'typeorm';
import { WebArticleEntity } from '.';

/**
 * Tag表
 */
@Entity({ name: 'web_tag' })
export class WebTagEntity {
  /**
   * 主键
   */
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  /**
   * 标签名称
   */
  @Column({ name: 'name' })
  name: string;

  /**
   * 标识
   */
  @Column({ name: 'path' })
  path: string;

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
   * 关联文章
   */
  @ManyToMany(() => WebArticleEntity, (article) => article.tags)
  articles: WebArticleEntity[];
}
