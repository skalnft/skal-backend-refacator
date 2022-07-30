import { AuthenticateAccountUseCase } from './../modules/account/useCase/authenticateAccount/AuthenticateAccountUseCase';
import { UserRepository } from './../modules/account/repositories/implamentations/UserRepository';
import { Router } from "express";
import { createAccountController } from "../modules/account/useCase/createAccount";
import { ensureAuthenticateWallet } from '../middlewares/ensureAuthenticateWallet';

const usersRoutes = Router();



usersRoutes.post("/account", (request, response) => {
    createAccountController.handle(request, response);
});

const repo = new UserRepository();
const auth = new AuthenticateAccountUseCase(repo);

usersRoutes.post("/authenticate", async (request, response) => {
    const user = await auth.execute(request.body.wallet);

    return response.send(user);
})

export { usersRoutes };