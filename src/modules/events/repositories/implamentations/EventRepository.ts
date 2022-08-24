import { Event } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { ICreateEventDTO } from '../../dtos/ICreateEventDTO';
import { IEventsRepository } from './../IEventsRepository';


export class EventsRepository implements IEventsRepository {
    
    async listEvents(): Promise<Event[]> {
        
        const events = await prisma.event.findMany();
        return events;
    }

    async create({
        title, 
        description, 
        locality, 
        start_at, 
        category_id, 
        admin,
        banner,
        profile,
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
                profile,
            }
        })
    }

    async getEventById(id: string): Promise<Event> {
        const event = await prisma.event.findFirst({
            where: {
                id
            }
        });

        return event;
    }
    
}