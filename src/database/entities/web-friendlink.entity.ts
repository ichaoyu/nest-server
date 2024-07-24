import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'web_friendlink' })
export class WebFriendlinkEntity {
  /**
   * 主键
   */
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: string;

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
  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  /**
   * 更新时间
   */
  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;
}
