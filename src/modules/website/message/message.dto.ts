import { PageDTO } from '@/models';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUrl, MaxLength } from 'class-validator';

export class FindMessagePageDTO extends PageDTO {
  @ApiProperty({ description: '姓名' })
  @IsOptional()
  name: string;

  @ApiProperty({ description: '电话' })
  @IsOptional()
  tel: string;
}
