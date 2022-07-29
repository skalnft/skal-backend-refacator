import { Event } from "@prisma/client";

export interface ICreateTicketDTO {
    event: Event;
    name: String;
    description: String;
    quantity: Number;
    price: Number;
    royalties?: Number;
    image: String; 
}