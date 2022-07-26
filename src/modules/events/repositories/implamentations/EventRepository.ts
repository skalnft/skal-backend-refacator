import { prisma } from '../../../../database/prismaClient';
import { ICreateEventDTO } from '../../dtos/ICreateEventDTO';
import { IEventsRepository } from './../IEventsRepository';


export class EventsRepository implements IEventsRepository {

    async create({
        title, 
        description, 
        locality, 
        start_at, 
        category_id, 
        admin,
        banner,
        profile
    }: ICreateEventDTO): Promise<void> {
        const event = await prisma.event.create({
            data: {
                title,
                description,
                locality,
                start_at,
                category_id,
                admin,
                banner,
                profile
            }
        })
    }
    
}