

export interface ICreateEventDTO {
    title: string;
    description: string;
    locality: string;
    start_at: Date;
    admin: string;
    banner?: string;
    profile?: string;
    category_id: string
}