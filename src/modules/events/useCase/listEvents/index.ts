import { ListEventsController } from './ListEventsController';
import { ListEventsUseCase } from './ListEventsUseCase';
import { EventsRepository } from './../../repositories/implamentations/EventRepository';


const eventsRepository = new EventsRepository();
const listEventsUseCase = new ListEventsUseCase(eventsRepository);
const listEventsController = new ListEventsController(listEventsUseCase);

export { listEventsController }