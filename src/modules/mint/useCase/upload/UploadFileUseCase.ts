import fs from 'fs';
import axios from "axios";
import FormData from "form-data";
import { prisma } from '../../../../database/prismaClient';

interface IRequest {
    name: string,
    description: string;
    filename: string;
}

export class UploadFileUseCase {

    async execute({ name, description, filename }: IRequest) {
        
        const data = new FormData();

        const metadataOBJ = {
            name,
            description
        }; 

        data.append('metadata', JSON.stringify(metadataOBJ));
        data.append('image', fs.createReadStream(filename));
        data.append('asset', fs.createReadStream(filename));

        const options = {
            method: 'POST',
            url: 'https://api.mintnft.today/v1/upload/single',
            headers: {
            'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
            'x-api-key': process.env.X_API_KEY
            },
            data: data
        };
        
        const res = await axios.request(options);
        const json = await res.data;

        const { url } = json.data;
        const { ipnft } = json.data;

        const createIpfs = await prisma.ipfs.create({
            data: {
                url,
                ipnft
            }
        });

        return createIpfs
    }
}