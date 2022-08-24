import { prisma } from '../../../../database/prismaClient';
import { ICreateTicketsDTO } from '../../dtos/ICreateTicketDTO';
import { ITicketRepository } from './ITicketsRepository';


export class TicketRepository implements ITicketRepository {

    async create({ quantity, price, event_id }: ICreateTicketsDTO): Promise<void> {
        const tickets = await prisma.ticket.create({
            data: {
                event_id,
                quantity,
                price
            }
        })
    }

}