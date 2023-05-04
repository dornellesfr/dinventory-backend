import StoreService from './StoreService';
import Jwt from '../helpers/JsonWebToken';
import ErrorApi from '../helpers/ErrorApi';

const storeService = new StoreService();

class loginService {
  private readonly _jwt: Jwt;
  constructor() {
    this._jwt = new Jwt();
  }

  async validateLogin(name: string, password: string): Promise<string> {
    const store = await storeService.findByName(name);

    if (store.name === name || store.password === password) {
      const token = this._jwt.createToken({ name, password });
      return token;
    } else {
      throw new ErrorApi('User or password not valid', 404);
    }
  }
}

export default loginService;
