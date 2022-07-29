import { UserRepository } from './../modules/account/repositories/implamentations/UserRepository';
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPoayload {
    sub: string;
}


const ensureAuthenticateWallet = async (request: Request, response: Response, next: NextFunction) => {

    const authUser = request.headers.authorization;

    if(!authUser) {
        throw new Error("Token missing!!");
    }

    const [, token] = authUser.split(" ");

    try {
        const { sub: user_id } = verify(token, process.env.AUTH_ENCRYPT) as IPoayload;

        const userRepository = new UserRepository();
        const user = await userRepository.findById(user_id);

        if(!user) {
            throw new Error("User not exists!");
        };

        request.account = { id: user_id };

        next();
    } catch(err) {
        throw new Error("Invalid token!!")
    }
    
}

export { ensureAuthenticateWallet }