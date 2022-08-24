import { ICreateTicketsDTO } from "../../dtos/ICreateTicketDTO";

export interface ITicketRepository {
    create(data: ICreateTicketsDTO): void;
}