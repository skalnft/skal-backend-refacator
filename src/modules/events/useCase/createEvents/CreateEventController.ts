import { CreateEventUseCase } from './CreateEventUseCase';
import { ICreateEventDTO } from './../../dtos/ICreateEventDTO';
import { Request, Response } from "express";

interface IRequest {

}


export class CreateEventController {

    constructor(
        private createEventUseCase: CreateEventUseCase
    ){}
    async handle(request: Request, response: Response): Promise<Response<any>> {

        const { title, description, locality, start_at, category_id, admin, banner, profile } = request.body;

        const event = await this.createEventUseCase.execute({
            title,
            description,
            locality,
            start_at,
            category_id,
            admin,
            banner,
            profile
        })

        return response.status(201).send(event);
    }
}