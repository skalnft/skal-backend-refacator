import { sign } from 'jsonwebtoken';
import { IUserRepository } from './../../repositories/IUserRepository';


export class AuthenticateAccountUseCase {

    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute(wallet: string) {

        const user = await this.userRepository.findByWallet(wallet);

        if(!user) {
            throw new Error("Account don't exist, create an account to continue!!")
        }

        const token = sign({ wallet }, process.env.AUTH_ENCRYPT, {
            subject: user.id,
            expiresIn: '1d'
        });

        return {
            token,
            user: user.username
        };
    }
}