import { CreateEventController } from './../modules/events/useCase/createEvents/CreateEventController';
import { Router } from "express";
import { createEventsCategoriesController } from "../modules/events/useCase/createEventsCategories";
import { createEventController } from '../modules/events/useCase/createEvents';
import { ensureAuthenticateWallet } from '../middlewares/ensureAuthenticateWallet';

const eventsRoutes = Router();

eventsRoutes.post("/create/category", ensureAuthenticateWallet, (request, response) => {{
    createEventsCategoriesController.handle(request, response);
}});

eventsRoutes.post("/createEvent", ensureAuthenticateWallet,(request, response) => {
    createEventController.handle(request, response);
});
export { eventsRoutes };