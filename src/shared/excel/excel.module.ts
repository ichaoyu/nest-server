import { DynamicModule, Module } from '@nestjs/common';

import { EXCEL_SERVICE } from '@/constants';
import { ExcelModuleOptions } from '@/interfaces';
import { ExcelService } from './excel.service';

export class ExcelModule {
  static registerAsync(params: ExcelModuleOptions) {
    const { global } = params;

    @Module({})
    class ExcelCoreModule {
      static create(): DynamicModule {
        return {
          global,
          module: ExcelCoreModule,
          providers: [
            {
              provide: EXCEL_SERVICE,
              useClass: ExcelService,
            },
          ],
          exports: [EXCEL_SERVICE],
        };
      }
    }

    return ExcelCoreModule.create();
  }
}
