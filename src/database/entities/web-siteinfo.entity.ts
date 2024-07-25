import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
/**
 * 网站信息表
 */
@Entity({ name: 'web_site_info' })
export class WebSiteInfoEntity {
  /**
   * 主键
   */
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: string;

  /**
   * 网站名称
   */
  @Column({ name: 'name' })
  name: string;

  /**
   * 网站域名
   */
  @Column({ name: 'domain' })
  domain: string;

  /**
   * 邮箱
   */
  @Column({ name: 'email' })
  email: string;

  /**
   * 微信
   */
  @Column({ name: 'wx' })
  wx: string;

  /**
   * ICP备案号
   */
  @Column({ name: 'icp' })
  icp: string;

  /**
   * 站点统计代码
   */
  @Column({ name: 'code' })
  code: string;

  /**
   * 万能配置
   */
  @Column({ name: 'json' })
  json: string;

  /**
   * 页面标题
   */
  @Column({ name: 'title' })
  title: string;

  /**
   * 页面关键词
   */
  @Column({ name: 'keywords' })
  keywords: string;

  /**
   * 页面描述
   */
  @Column({ name: 'description' })
  description: string;

  /**
   * view模板
   */
  @Column({ name: 'template' })
  template: string;

  /**
   * 微信小程序appid
   */
  @Column({ name: 'appid' })
  appid: string;

  /**
   * 微信小程序secret
   */
  @Column({ name: 'secret' })
  secret: string;

  /**
   * 更新者
   */
  @Column({ name: 'update_by' })
  updateBy: string;

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
