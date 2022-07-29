import { Request, Response } from 'express';
import { ListEventsUseCase } from './ListEventsUseCase';



export class ListEventsController {

    constructor(
        private listEventsUseCase: ListEventsUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        const events = await this.listEventsUseCase.execute();

        return response.status(200).send(events);
    }
}