import { CreateTicketController } from './createTicketController';
import { CreateTicketsUseCase } from './createTicketsUseCase';
import { TicketRepository } from './../../repositories/tickets/TicketRepository';


const ticketRepository = new TicketRepository();
const createTicketsUseCase = new CreateTicketsUseCase(ticketRepository);
export const createTicketsController = new CreateTicketController(createTicketsUseCase)
