import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  SysConfigEntity,
  SysDeptEntity,
  SysDictDataEntity,
  SysDictTypeEntity,
  SysLoginLogEntity,
  SysMenuEntity,
  SysOperLogEntity,
  SysPostEntity,
  SysRoleEntity,
  SysUserEntity,
} from '@/database';

import { ContextService } from './context.service';
import { SharedService } from './shared.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      SysConfigEntity,
      SysDeptEntity,
      SysDictDataEntity,
      SysDictTypeEntity,
      SysLoginLogEntity,
      SysMenuEntity,
      SysPostEntity,
      SysRoleEntity,
      SysUserEntity,
      SysOperLogEntity,
    ]),
  ],
  providers: [ContextService, SharedService],
  exports: [ContextService, SharedService, TypeOrmModule],
})
export class SharedModule {}
