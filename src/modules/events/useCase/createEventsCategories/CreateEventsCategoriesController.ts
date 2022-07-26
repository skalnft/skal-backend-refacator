import { Request, Response } from 'express';
import { CreateEventsCategoriesUseCase } from './CreateEventsCategoriesUseCase';


export class CreateEventsCategoriesController {
    constructor(
        private createEventsCategoriesUseCase: CreateEventsCategoriesUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response<any>> {
        const { name } = request.body;

        const category = await this.createEventsCategoriesUseCase.execute(name)

        return response.status(201).send(category);
    }
}