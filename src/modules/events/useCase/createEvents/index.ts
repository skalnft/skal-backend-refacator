import { CreateEventController } from './CreateEventController';
import { CreateEventUseCase } from './CreateEventUseCase';
import { EventsRepository } from './../../repositories/implamentations/EventRepository';


const eventsRepository = new EventsRepository();
const createEventUseCase = new CreateEventUseCase(eventsRepository);
const createEventController = new CreateEventController(createEventUseCase);

export { createEventController };