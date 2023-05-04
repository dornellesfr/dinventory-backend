import type { Request, Response } from 'express';
// import ErrorApi from '../helpers/ErrorApi';
import LoginService from '../services/loginService';

const loginService = new LoginService();

class LoginController {
  async validateLogin(req: Request, res: Response): Promise<Response> {
    const { name, password } = req.body;
    const validateLogin = await loginService.validateLogin(name, password);
    req.headers.authorization = validateLogin;
    return res.status(200).json({ token: validateLogin });
  }
}

export default LoginController;
