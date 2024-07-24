import { ICacheModel } from '@/interfaces';

export const createCacheModel = (data: ICacheModel): ICacheModel => ({
  cacheName: data.cacheName.replace(':', ''),
  remark: data.remark,
});
