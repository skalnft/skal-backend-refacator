import { UploadFileUseCase } from './UploadFileUseCase';
import { Request, Response } from "express";


export class UploadFileController {

    constructor(
        private uploadFileUseCase: UploadFileUseCase
    ) {}
    async handle(request: Request, response: Response) {
        
        const filename = request.file.destination +'/'+ request.file.filename;
        const { name, description } = request.body;

        const mint = await this.uploadFileUseCase.execute({
            name,
            description,
            filename
        });

        return response.status(201).send({ message: "Created", mint });
    }
}