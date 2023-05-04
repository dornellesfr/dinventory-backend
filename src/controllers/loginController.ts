import type { Request, Response } from 'express';
// import ErrorApi from '../helpers/ErrorApi';
import LoginService from '../services/LoginService';

const loginService = new LoginService();

class LoginController {
  async validateLogin(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const token = await loginService.validateLogin(email, password);
    req.headers.authorization = token;
    return res.status(200).json({ token });
  }
}

export default LoginController;
