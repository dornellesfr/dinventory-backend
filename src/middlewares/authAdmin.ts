import type { Request, Response, NextFunction } from 'express';
import StoreService from '../services/StoreService';
import ErrorApi from '../helpers/ErrorApi';

const storeService = new StoreService();

async function validateAdminUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { name } = req.body;

  const store = await storeService.findByName(name);
  if (store.admin) {
    next();
  } else {
    throw new ErrorApi('User is not admin', 401);
  }
}

export default validateAdminUser;
