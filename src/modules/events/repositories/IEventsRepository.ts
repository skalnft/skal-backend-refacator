import { Event } from '@prisma/client';
import { ICreateEventDTO } from './../dtos/ICreateEventDTO';



export interface IEventsRepository {
    create(data: ICreateEventDTO): Promise<void>;
    listEvents(): Promise<Event[]>;
    getEventById(id: string): Promise<Event>
}