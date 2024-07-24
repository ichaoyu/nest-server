import { ApiProperty } from '@nestjs/swagger';

import { ITreeNode } from '@/interfaces';

/**
 * 树形节点响应传输对象
 */
export class TreeNodeVO implements ITreeNode {
  @ApiProperty({ description: '标题' })
  title: string;

  @ApiProperty({ description: '标识' })
  key: string;

  @ApiProperty({ description: '父标识' })
  parentKey?: string;

  @ApiProperty({
    description: '子级',
    type: 'array',
    items: { type: 'object' },
  })
  children?: ITreeNode[];
}
