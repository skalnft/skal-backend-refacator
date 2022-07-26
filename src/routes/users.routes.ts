import { Router } from "express";
import { createAccountController } from "../modules/account/useCase/createAccount";

const usersRoutes = Router();



usersRoutes.post("/account", (request, response) => {
    createAccountController.handle(request, response);
});

export { usersRoutes };