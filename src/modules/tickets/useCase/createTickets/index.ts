import { TicketsRepository } from "../../repositories/implementations/TicketsRepository";
import { CreateTicketController } from "./CreateTicketController";
import { CreateTicketUseCase } from "./CreateTicketUseCase";


const ticketsRepository = new TicketsRepository();
const createTicketUseCase = new CreateTicketUseCase(ticketsRepository);
const createTicketController = new CreateTicketController(createTicketUseCase);

export {createTicketController}