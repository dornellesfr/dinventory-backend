import { type Secret, sign, verify, type JwtPayload } from 'jsonwebtoken';
import type { loginStore } from '../entities/Store';
import dotenv from 'dotenv';
import ErrorApi from './ErrorApi';

dotenv.config();

class Jwt {
  private readonly _SECRET: Secret;

  constructor() {
    this._SECRET = process.env.SECRET ?? 'secret';
  }

  createToken(data: loginStore): string {
    const token = sign(data, this._SECRET, { algorithm: 'HS256', expiresIn: '2d' });

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
