import { PageDTO } from '@/models';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUrl, MaxLength } from 'class-validator';

export class FindFlinkPageDTO extends PageDTO {
  @ApiProperty({ description: '链接名称' })
  @IsOptional()
  title: string;

  @ApiProperty({ description: '链接地址' })
  @IsOptional()
  link: string;
}

export class CreateFlinkDTO {
  @ApiProperty({ description: '链接名称' })
  @IsNotEmpty({ message: '链接名称不能为空' })
  @MaxLength(15, { message: '链接名称不能超过15个字符' })
  title: string;

  @ApiProperty({ description: '链接地址' })
  @IsNotEmpty({ message: '链接地址不能为空' })
  @IsUrl({}, { message: '链接格式不正确' })
  link: string;

  @ApiProperty({ description: '排序' })
  @IsOptional()
  sort: string;

  @ApiProperty({ description: '备注' })
  @IsOptional()
  remark: string;
}

export class UpdateFlinkDto extends CreateFlinkDTO {
  @IsOptional()
  title: string;

  @IsOptional()
  link: string;
}
