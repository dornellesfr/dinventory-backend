import { type RequestHandler, Router } from 'express';
import LoginController from '../controllers/loginController';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', (req, res) => loginController.validateLogin(req, res) as unknown as RequestHandler);

export default loginRouter;
