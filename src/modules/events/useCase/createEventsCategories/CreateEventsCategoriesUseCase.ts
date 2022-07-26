import { IEventsCategoriesRepository } from './../../repositories/IEventsCategoriesRepository';


export class CreateEventsCategoriesUseCase {

    constructor(
        private eventCategories: IEventsCategoriesRepository
    ) {}

    async execute(name: string): Promise<void> {
        const event = await this.eventCategories.create(name);
    }
}