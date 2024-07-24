import { SysUserEntity } from '@/database';
import { IPayload } from '@/interfaces';

declare module 'fastify' {
  interface FastifyRequest {
    payload: IPayload;
    user: SysUserEntity;
    cookies: string;
  }
}
