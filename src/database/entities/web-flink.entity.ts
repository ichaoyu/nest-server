import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * 友情链接表
 */
@Entity({ name: 'web_flink' })
export class WebFlinkEntity {
  /**
   * 主键
   */
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  /**
   * 链接名称
   */
  @Column({ name: 'title' })
  title: string;

  /**
   * 链接地址
   */
  @Column({ name: 'link' })
  link: string;

  /**
   * 排序
   */
  @Column({ name: 'sort' })
  sort: string;

  /**
   * 备注
   */
  @Column({ name: 'remark' })
  remark: string;

  /**
   * 创建时间
   */
  @CreateDateColumn({
    name: 'create_time',
    update: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  /**
   * 更新时间
   */
  @UpdateDateColumn({ name: 'update_time', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;
}
