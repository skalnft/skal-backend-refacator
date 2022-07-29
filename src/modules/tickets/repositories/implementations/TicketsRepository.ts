import { prisma } from "@prisma/client";
import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { ITicketsRepository } from "../ITicketsRepository";


export class TicketsRepository implements ITicketsRepository {
    async create({
        event,
        name,
        description,
        quantity,
        price,
        royalties,
        image  
    }: ICreateTicketDTO): Promise<void> {
        const ticket = await prisma.ticket.create({
            data: {
                event,
                name,
                description,
                quantity,
                price,
                royalties,
                image  
            }
        })
    }
}