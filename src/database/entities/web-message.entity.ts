import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * 留言表
 */
@Entity({ name: 'web_message' })
export class WebMessageEntity {
  /**
   * 主键
   */
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: string;

  /**
   * 姓名
   */
  @Column({ name: 'name' })
  name: string;

  /**
   * 电话
   */
  @Column({ name: 'tel' })
  tel: string;

  /**
   * 公司名称
   */
  @Column({ name: 'company' })
  company: string;

  /**
   * 留言内容
   */
  @Column({ name: 'content' })
  content: string;

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
