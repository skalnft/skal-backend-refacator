import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { ITicketsRepository } from "../../repositories/ITicketsRepository";


export class CreateTicketUseCase {
    constructor(private ticketRepository: ITicketsRepository) {}

    async execute({
        event,
        name,
        description,
        quantity,
        price,
        royalties,
        image
    }: ICreateTicketDTO): Promise<void> {
        const ticket = await this.ticketRepository.create({
            event,
            name,
            description,
            quantity,
            price,
            royalties,
            image  
        })
    }
}