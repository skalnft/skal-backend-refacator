import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";


export interface ITicketsRepository {
    create(data: ICreateTicketDTO): Promise<void>;
}