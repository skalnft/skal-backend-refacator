import { User } from '@prisma/client';
import { IUserRepository } from './../../repositories/IUserRepository';

interface IRequest {
    username: string;
    wallet: string;
}

export class CreateAccountUseCase {

    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute({ username, wallet }: IRequest): Promise<User> {
        const user = await this.userRepository.create({
            username,
            wallet
        });

        return user;
    }
}