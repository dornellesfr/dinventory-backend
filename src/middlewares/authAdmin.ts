import type { Request, Response, NextFunction } from 'express';
import ErrorApi from '../helpers/ErrorApi';
import Jwt from '../helpers/JsonWebToken';
import type { StoreInput } from '../entities/Store';

const jwt = new Jwt();

async function validateAdminUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { authorization } = req.headers;

  if (authorization === undefined) throw new ErrorApi('Token is not valid', 401);

  const accesKey = jwt.verifyToken(authorization) as Partial<StoreInput>;

  console.log(accesKey);
  const { admin } = accesKey;

  if (admin === true) {
    next();
  } else {
    throw new ErrorApi('User is not admin', 401);
  }
}

export default validateAdminUser;
