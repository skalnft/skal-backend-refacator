import { UserRepository } from '../../modules/account/repositories/implamentations/UserRepository';
import { IUserRepository } from '../../modules/account/repositories/IUserRepository';


import { container } from "tsyringe";


container.registerSingleton<IUserRepository>(
    "UsersRepository",
    UserRepository
)