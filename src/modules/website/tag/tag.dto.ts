import { PageDTO } from '@/models';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class FindTagPageDTO extends PageDTO {
  @ApiProperty({ description: '名称' })
  @IsOptional()
  keywords: string;
}

export class CreateTagDTO {
  @ApiProperty({ description: '标签名称' })
  @IsNotEmpty({ message: '标签名称不能为空' })
  @MaxLength(15, { message: '标签名称不能超过15个字符' })
  name: string;

  @ApiProperty({ description: '标识' })
  @IsOptional()
  path: string;

  @ApiProperty({ description: '创建时间' })
  @IsOptional()
  createTime: Date;

  @ApiProperty({ description: '更新时间' })
  @IsOptional()
  updateTime: Date;
}

export class UpdateTagDto extends CreateTagDTO {
  @ApiProperty({ description: '主键' })
  id: number;
}
