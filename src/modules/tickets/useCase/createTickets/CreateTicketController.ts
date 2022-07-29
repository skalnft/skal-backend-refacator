import { Request, Response } from "express";
import { CreateTicketUseCase } from "./CreateTicketUseCase";


interface IRequest {

}


export class CreateTicketController {
    constructor(
        private createTicketUseCase: CreateTicketUseCase
    ) {}

        async handle(request: Request, response: Response): Promise<Response<any>> {
            const {event,
                name,
                description,
                quantity,
                price,
                royalties,
                image  } = request.body;

            const ticket = await this.createTicketUseCase.execute({
                event,
                name,
                description,
                quantity,
                price,
                royalties,
                image
            })

            return response.status(200).send(ticket);
        }
}