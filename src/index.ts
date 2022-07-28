import 'dotenv/config';
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express"; 
import { routes } from "./routes";

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(401).json({
            message: err.message
        });
    }

    return response.status(500).send({
        status: "Error",
        message: "Internal server error"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});