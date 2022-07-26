import { prisma } from '../../../../database/prismaClient';
import { IEventsCategoriesRepository } from './../IEventsCategoriesRepository';


export class EventsCategoriesRepository implements IEventsCategoriesRepository {

    async create(name: string): Promise<void> {
        
        const eventCategory = await prisma.eventCategory.create({
            data: {
                name
            }
        });
    }

}