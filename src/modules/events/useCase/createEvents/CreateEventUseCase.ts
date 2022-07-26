import "reflect-metadata";
import { IEventsRepository } from './../../repositories/IEventsRepository';
import { ICreateEventDTO } from './../../dtos/ICreateEventDTO';


export class CreateEventUseCase {

    constructor(
        private eventsRepository: IEventsRepository
    ) {}

    async execute({
        title,
        description,
        locality,
        start_at,
        category_id,
        admin,
        banner,
        profile
    }: ICreateEventDTO): Promise<void> {
        const event = await this.eventsRepository.create({
            title,
            description,
            locality,
            start_at,
            category_id,
            admin,
            banner,
            profile
        });
    }
}