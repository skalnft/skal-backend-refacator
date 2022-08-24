import "reflect-metadata";
import axios from "axios";
import multer from "multer";
import uploadConfig from "../config/upload";
import { Request, Response, Router } from "express";
import { usersRoutes } from "./users.routes";
import { prisma } from "../database/prismaClient";
import { eventsRoutes } from './events.routes';
import { uploadFileController } from '../modules/mint/useCase/upload';
import { ensureAuthenticateWallet } from "../middlewares/ensureAuthenticateWallet";

const routes = Router();

const uploadFile = multer(uploadConfig.upload('./temp'));

routes.get('', (request: Request, response: Response) => {
    return response.send({
        message: "api skal",
        version: "0.0.1"
    })
});

routes.post('/upload', ensureAuthenticateWallet, uploadFile.single('file'), (request, response) => {
    uploadFileController.handle(request, response);
});

routes.post('/mint', ensureAuthenticateWallet,async (request, response) => {

    const { wallet, id } = request.body

    const ifps = await prisma.ipfs.findFirst({
      where: {
        id
      }
    })

    const dataJson = {
      "wallet": wallet || process.env.SEED_WALLET,
      "type": "ERC721", //or ERC1155
      "network" : "mainnet",
      "amount": 1,
      "tokenCategory": "soulbound", //optional (Only applicable for type ERC721)
      "tokenUri": ifps.url
    }

    const opts = {
      method: 'POST',
      url: 'https://api.mintnft.today/v1/mint/single',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.X_API_KEY
      },
      data: dataJson,
    }
    
    const res = await axios.request(opts);
    const data = await res.data;

    console.log(data);

    await prisma.ipfs.update({
        data: {
            isMinted: true
        },
        where: {
            id
        },
    });
    
    return response.status(201).send({ message: "Minted!!" })
});

routes.use("/users", usersRoutes);
routes.use("/events", eventsRoutes);

export { routes };