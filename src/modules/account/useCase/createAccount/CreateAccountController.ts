import { CreateAccountUseCase } from './CreateAccountUseCase';
import { Request, Response } from "express";


export class CreateAccountController {

    constructor(
        private createAccountUseCase: CreateAccountUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        const { username, wallet } = request.body;

        const user = await this.createAccountUseCase.execute({
            username,
            wallet
        });
        
        return response.status(201).send({user})
    }
}