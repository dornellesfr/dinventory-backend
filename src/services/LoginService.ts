import StoreService from './StoreService';
import Jwt from '../helpers/JsonWebToken';
import ErrorApi from '../helpers/ErrorApi';

const storeService = new StoreService();

class loginService {
  private readonly _jwt: Jwt;
  constructor() {
    this._jwt = new Jwt();
  }

  async validateLogin(email: string, password: string): Promise<string> {
    const store = await storeService.findByEmail(email);

    if (store.email === email && store.password === password) {
      const token = this._jwt.createToken({ email, password });
      return token;
    } else {
      throw new ErrorApi('Email or password not valid', 404);
    }
  }
}

export default loginService;
