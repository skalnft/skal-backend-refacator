import { prisma } from '../../../../database/prismaClient';
import { IUploadFileRepository } from './../IUploadFileRepository';


export class UploadFileRepository implements IUploadFileRepository {

    async upload(name: string, description: string): Promise<void> {
        
        const ifps = ''
    }
    
}