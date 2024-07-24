import { SavedMultipartFile } from '@fastify/multipart';
import { IRequest } from './context.interface';

export type IFile = SavedMultipartFile;
export type IFiles = SavedMultipartFile[];

export type IUploadOptions = Parameters<IRequest['saveRequestFiles']>[0];
