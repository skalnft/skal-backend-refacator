import { createTicketsController } from './../modules/events/useCase/createTickets/index';
import { ListEventsController } from './../modules/events/useCase/listEvents/ListEventsController';
import { ensureAdmin } from './../middlewares/ensureAdmin';
import { CreateEventController } from './../modules/events/useCase/createEvents/CreateEventController';
import { Router } from "express";
import { createEventsCategoriesController } from "../modules/events/useCase/createEventsCategories";
import { createEventController } from '../modules/events/useCase/createEvents';
import { ensureAuthenticateWallet } from '../middlewares/ensureAuthenticateWallet';
import { listEventsController } from '../modules/events/useCase/listEvents';
//import { listEventsController } from '../modules/events/useCase/listEvents';

const eventsRoutes = Router();

eventsRoutes.post("/categories", ensureAuthenticateWallet, (request, response) => {{
    createEventsCategoriesController.handle(request, response);
}});

eventsRoutes.post("/create", ensureAuthenticateWallet,(request, response) => {
    createEventController.handle(request, response);
});

eventsRoutes.get('', (request, response) => {
    return listEventsController.handle(request, response)
});

eventsRoutes.post('/tickets', (request, response) => {
    return createTicketsController.handle(request, response);
})
export { eventsRoutes };