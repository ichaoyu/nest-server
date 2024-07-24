import { ApiProperty } from '@nestjs/swagger';

/**
 * 单文件上传请求传输对象
 */
export class UploadFileDTO {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

/**
 * 多文件上传请求传输对象
 */
export class UploadFilesDTO {
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  file: any[];
}
