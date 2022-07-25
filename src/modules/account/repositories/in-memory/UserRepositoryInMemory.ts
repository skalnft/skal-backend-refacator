import { User } from '@prisma/client';
import { IUserDto } from '../../Dtos/IUserDtos';
import { IUserRepository } from './../IUserRepository';

class UserInMemory {

    id?: string;
    username: string;
    wallet: string;
    isAdmin: boolean;
    profile?: string;
    banner?: string;
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = "1243534"
            this.created_at = new Date();
            this.isAdmin = false
        }
    }
}


export class UserRepositoryInMemory {

    users: [];

    constructor() {
        this.users = [];
    }
    async create({ username, wallet }: IUserDto): Promise<void> {
        
        const user = new UserInMemory();

        Object.assign(user, {
            username,
            wallet
        });
    }

}