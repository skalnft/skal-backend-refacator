

export interface IUploadFileRepository {
    upload(name: string, description: string): Promise<void>;
}