import { EventsRepository } from './../../modules/events/repositories/implamentations/EventRepository';
import { IEventsRepository } from './../../modules/events/repositories/IEventsRepository';
import { UserRepository } from '../../modules/account/repositories/implamentations/UserRepository';
import { IUserRepository } from '../../modules/account/repositories/IUserRepository';


import { container } from "tsyringe";


container.registerSingleton<IUserRepository>(
    "UsersRepository",
    UserRepository
)

container.registerSingleton<IEventsRepository>(
    "EventsReposirory",
    EventsRepository
);