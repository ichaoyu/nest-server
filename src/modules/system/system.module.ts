import { Module } from '@nestjs/common';

import { ConfigModule } from './config';
import { DeptModule } from './dept';
import { DictModule } from './dict';
import { MenuModule } from './menu';
import { PostModule } from './post';
import { RoleModule } from './role';
import { UserModule } from './user';

@Module({
  imports: [
    ConfigModule,
    DeptModule,
    DictModule,
    MenuModule,
    PostModule,
    RoleModule,
    UserModule,
  ],
})
export class SystemModule {}
