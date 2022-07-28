import { User } from '@prisma/client';
import { IUserDto } from './../Dtos/IUserDtos';



export interface IUserRepository {
    create({ username, wallet }: IUserDto): Promise<User>;
    findByWallet(wallet: string): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findById(id: string): Promise<User>;
}