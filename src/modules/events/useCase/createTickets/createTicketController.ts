import { ICreateEventDTO } from './../../dtos/ICreateEventDTO';
import { Request, Response } from 'express';
import { CreateTicketsUseCase } from './createTicketsUseCase';
export class CreateTicketController {
    constructor(
        private createTicketsUseCase: CreateTicketsUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { event_id, price, quantity } = request.body

        const event = await this.createTicketsUseCase.execute({
            event_id,
            price,
            quantity
        });

        return response.status(201).send({
            'message': 'created'
        });
    }
}