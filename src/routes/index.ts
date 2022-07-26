import fs from 'fs';
import axios from "axios";
import multer from "multer";
import FormData from "form-data";
import uploadConfig from "../config/upload";
import { Request, Response, Router } from "express";
import { usersRoutes } from "./users.routes";
import { prisma } from "../database/prismaClient";
import { eventsRoutes } from './events.routes';

const routes = Router();
const data = new FormData();

const uploadFile = multer(uploadConfig.upload('./temp'));

routes.get('', (request: Request, response: Response) => {
    return response.send({
        message: "api skal",
        version: "0.0.1"
    })
});

routes.post('/upload', uploadFile.single('file'), async (request, response) => {

    const filename = request.file.destination +'/'+ request.file.filename;
    const { name, description } = request.body;

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
      })

      
      console.log(json);

      return response.status(201).send({ message: "Created", createIpfs });
});

routes.post('/mint', async (request, response) => {

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

    if(data.status === "confirmed") {
        await prisma.ipfs.update({
          data: {
            isMinted: true
          },
          where: {
            id
          }
        })
    }

    console.log(data);
    
    return response.status(201).send({ message: "Minted!!" })
});

routes.use("/users/account", usersRoutes);
routes.use("/events", eventsRoutes);

export { routes };