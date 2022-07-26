import { CreateEventsCategoriesController } from './CreateEventsCategoriesController';
import { CreateEventsCategoriesUseCase } from './CreateEventsCategoriesUseCase';
import { EventsCategoriesRepository } from './../../repositories/implamentations/EventsCategoriesRepository';



const eventsCategoriesRepository = new EventsCategoriesRepository();
const createEventsCategoriesUseCase = new CreateEventsCategoriesUseCase(eventsCategoriesRepository);
const createEventsCategoriesController = new CreateEventsCategoriesController(createEventsCategoriesUseCase);

export { createEventsCategoriesController };