import { UserRepository } from './../modules/account/repositories/implamentations/UserRepository';
import { NextFunction, Request, Response } from "express";


export const ensureAdmin = async (request: Request, response: Response, next: NextFunction) => {

    const id = request.account.id;

    const userRepository = new UserRepository();
    const user = await userRepository.findById(id);

    if(user.isAdmin) {
        next
    } else {
        throw new Error("Your not a adm!!")
    }
}