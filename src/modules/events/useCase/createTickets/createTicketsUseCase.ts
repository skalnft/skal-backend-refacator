import { ICreateTicketsDTO } from './../../dtos/ICreateTicketDTO';
import { TicketRepository } from './../../repositories/tickets/TicketRepository';
export class CreateTicketsUseCase {
    constructor(
        private ticketRepository: TicketRepository
    ) {}

    async execute({ event_id, price, quantity }: ICreateTicketsDTO) {
        const ticket = await this.ticketRepository.create({
            event_id,
            quantity,
            price
        });
    }
}