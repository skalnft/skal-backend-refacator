

export interface IEventsCategoriesRepository {
    create(name: string): Promise<void>;
}