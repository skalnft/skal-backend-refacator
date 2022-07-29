import { Event } from '@prisma/client';
import { IEventsRepository } from './../../repositories/IEventsRepository';


export class ListEventsUseCase {

    constructor(
        private eventsRepository: IEventsRepository
    ) {}

    async execute(): Promise<Event[]> {
        return await this.eventsRepository.listEvents();
    }
}