import { ICreateEventDTO } from './../dtos/ICreateEventDTO';



export interface IEventsREpository {
    create(data: ICreateEventDTO): Promise<void>;
}