import { User } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { IUserDto } from '../../Dtos/IUserDtos';
import { IUserRepository } from './../IUserRepository';


export class UserRepository implements IUserRepository{
    async findById(id: string): Promise<User> {
        
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        });

        return user
    }
    
    async create({ username, wallet }: IUserDto): Promise<User> {
        const user = await prisma.user.create({
            data: {
                username,
                wallet
            }
        });

        return user
    }

    async findByWallet(wallet: string): Promise<User> {  
        const user = await prisma.user.findFirst({
            where: {
                wallet
            }
        });
        return user;
    }

    async findAllUsers(): Promise<User[]> {
        const users = await prisma.user.findMany();;
        return users;
    }
    
}