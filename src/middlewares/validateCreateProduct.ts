import type { Request, Response, NextFunction } from 'express';
import ErrorApi from '../helpers/ErrorApi';

function validateCreateProduct(req: Request, res: Response, next: NextFunction): void {
  const { name, description, price, quantity, storeId } = req.body;

  const objInputs = { name, description, price, quantity, storeId };

  Object.entries(objInputs).forEach((input) => {
    const [key, value] = input;
    if (value === undefined) throw new ErrorApi(`${key} is required`, 400);
  });

  next();
}

export default validateCreateProduct;
