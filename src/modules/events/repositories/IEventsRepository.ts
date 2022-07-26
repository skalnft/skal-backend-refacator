import { ICreateEventDTO } from './../dtos/ICreateEventDTO';



export interface IEventsRepository {
    create(data: ICreateEventDTO): Promise<void>;
}