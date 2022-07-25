import { CreateAccountController } from './CreateAccountController';
import { CreateAccountUseCase } from './CreateAccountUseCase';
import { UserRepository } from './../../repositories/implamentations/UserRepository';


const userRepository = new UserRepository();
const createAccountUseCase = new CreateAccountUseCase(userRepository);
const createAccountController = new CreateAccountController(createAccountUseCase);

export { createAccountController };