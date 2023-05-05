import { type Secret, sign, verify, type JwtPayload } from 'jsonwebtoken';
import type { StoreInput } from '../entities/Store';
import dotenv from 'dotenv';
import ErrorApi from './ErrorApi';

dotenv.config();

class Jwt {
  private readonly _SECRET: Secret;

  constructor() {
    this._SECRET = process.env.SECRETJWT ?? 'secret';
  }

  createToken(data: StoreInput): string {
    const { email, password, name, admin } = data;
    const store = { email, password, name, admin };
    const token = sign(store, this._SECRET, { algorithm: 'HS256', expiresIn: '4d' });

    return token;
  }

  verifyToken(token: string): JwtPayload | string {
    try {
      const data = verify(token, this._SECRET);
      return data;
    } catch (error) {
      throw new ErrorApi('Unauthorized token', 401);
    }
  }
}

export default Jwt;
