import multer, { Options } from "multer";
import { resolve } from "path";
import crypto from 'crypto';

export default {
    
    upload(folder: string): Options {
        return {
            storage: multer.diskStorage({
                destination: (request, file, cd) => {
                    cd(null, folder)
                },
                
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;

                    return callback(null, fileName);
                }
            })
        };
    }
}