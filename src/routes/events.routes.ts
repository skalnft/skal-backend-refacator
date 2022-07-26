import { CreateEventController } from './../modules/events/useCase/createEvents/CreateEventController';
import { Router } from "express";
import { createEventsCategoriesController } from "../modules/events/useCase/createEventsCategories";
import { createEventController } from '../modules/events/useCase/createEvents';

const eventsRoutes = Router();

eventsRoutes.post("/create/category", (request, response) => {{
    createEventsCategoriesController.handle(request, response);
}});

eventsRoutes.post("/createEvent", (request, response) => {
    createEventController.handle(request, response);
});
export { eventsRoutes };