import { Module } from '@nestjs/common';

import { DictDataModule } from './dict-data';
import { DictTypeModule } from './dict-type';

@Module({
  imports: [DictTypeModule, DictDataModule],
})
export class DictModule {}
