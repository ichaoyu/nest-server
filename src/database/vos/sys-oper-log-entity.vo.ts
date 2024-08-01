import { ApiProperty } from '@nestjs/swagger';

import { ENTITY_BIZ_STATUS, ENTITY_BIZ_TYPE } from '@/constants';

import { SysOperLogEntity } from '../entities';

/**
 * 系统操作日志表响应传输对象
 */
export class SysOperLogEntityVO implements SysOperLogEntity {
  @ApiProperty({ description: '主键' })
  id: number;

  @ApiProperty({ description: '操作模块' })
  title: string;

  @ApiProperty({ description: '业务类型', enum: ENTITY_BIZ_TYPE })
  bizType: ENTITY_BIZ_TYPE;

  @ApiProperty({ description: '请求方式' })
  method: string;

  @ApiProperty({ description: '请求方式' })
  requestMethod: string;

  @ApiProperty({ description: '请求地址' })
  requestUrl: string;

  @ApiProperty({ description: '请求参数' })
  requestParams: string;

  @ApiProperty({ description: '请求结果' })
  requestResult: string;

  @ApiProperty({ description: '操作人员' })
  operName: string;

  @ApiProperty({ description: '部门名称' })
  deptName: string;

  @ApiProperty({ description: '操作地址' })
  operIp: string;

  @ApiProperty({ description: '操作地点' })
  operLocation: string;

  @ApiProperty({
    description: '状态（0正常 1异常）',
    enum: ENTITY_BIZ_STATUS,
  })
  status: ENTITY_BIZ_STATUS;

  @ApiProperty({ description: '错误消息' })
  errorMsg: string;

  @ApiProperty({ description: '操作时间' })
  operTime: Date;

  @ApiProperty({ description: '消耗时间' })
  costTime: number;
}
