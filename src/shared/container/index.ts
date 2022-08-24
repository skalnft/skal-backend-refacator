import { container } from "tsyringe";


import { EventsRepository } from './../../modules/events/repositories/implamentations/EventRepository';
import { IEventsRepository } from './../../modules/events/repositories/IEventsRepository';
import { UserRepository } from '../../modules/account/repositories/implamentations/UserRepository';
import { IUserRepository } from '../../modules/account/repositories/IUserRepository';




container.registerSingleton<IUserRepository>(
    "UsersRepository",
    UserRepository
)

container.registerSingleton<IEventsRepository>(
    "EventsReposirory",
    EventsRepository
);