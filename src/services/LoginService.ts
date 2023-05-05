import StoreService from './StoreService';
import Jwt from '../helpers/JsonWebToken';
import ErrorApi from '../helpers/ErrorApi';
import BCrypt from '../helpers/BCrypt';

const storeService = new StoreService();

class loginService {
  private readonly _jwt: Jwt;
  private readonly _bcrypt: BCrypt;
  constructor() {
    this._jwt = new Jwt();
    this._bcrypt = new BCrypt();
  }

  async validateLogin(email: string, password: string): Promise<string> {
    const store = await storeService.findByEmail(email);

    if (store.email !== email) throw new ErrorApi('Email not valid', 404);

    if (this._bcrypt.comparePassword(password, store.password)) {
      const token = this._jwt.createToken({ email: store.email, password: store.password, admin: store.admin, name: store.name });
      return token;
    } else {
      throw new ErrorApi('Password not valid', 404);
    }
  }
}

export default loginService;
