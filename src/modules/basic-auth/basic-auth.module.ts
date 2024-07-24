import { Module } from '@nestjs/common';

import { BasicAuthController } from './basic-auth.controller';

@Module({
  controllers: [BasicAuthController],
})
export class BasicAuthModule {}
