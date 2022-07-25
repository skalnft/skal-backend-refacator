import { User } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { IUserDto } from '../../Dtos/IUserDtos';
import { IUserRepository } from './../IUserRepository';


export class UserRepository implements IUserRepository{

    async create({ username, wallet }: IUserDto): Promise<User> {
        const user = await prisma.user.create({
            data: {
                username,
                wallet
            }
        });

        return user
    }
    
}