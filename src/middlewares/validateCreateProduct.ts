import type { Request, Response, NextFunction } from 'express';
import validatorInputs from '../helpers/validatorInputs';

function validateCreateProduct(req: Request, res: Response, next: NextFunction): void {
  const { name, price, quantity, storeId } = req.body;

  const objInputs = { name, price, quantity, storeId };

  validatorInputs(objInputs);

  next();
}

export default validateCreateProduct;
