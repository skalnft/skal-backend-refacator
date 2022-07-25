import { Router } from "express";
import { createAccountController } from "../modules/account/useCase/createAccount";

const usersRoutes = Router();



usersRoutes.post("/", (request, response) => {
    createAccountController.handle(request, response);
});

export { usersRoutes };