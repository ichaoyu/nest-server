import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

import { QUEUES } from '@/constants';
import { SharedService } from '@/shared';
import { SysUtil } from '@/utils';

/**
 * 操作日志队列
 */
@Processor(QUEUES.OPER_LOG)
export class OperLogProcessor {
  constructor(private sharedService: SharedService) {}

  @Process()
  async execute(job: Job<any>) {
    const { ip, operName, ...rest } = job.data;
    const { dept } = await this.sharedService.getUserWithDeptByName(operName);
    const { deptName } = dept;
    const operIp = await SysUtil.parseIP(ip);
    const operLocation = await SysUtil.parseAddress(operIp);

    await this.sharedService.setOperLog({
      ...rest,
      deptName,
      operName,
      operIp,
      operLocation,
    });

    return {};
  }
}
