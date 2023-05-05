import type { Request, Response, NextFunction } from 'express';
import validatorInputs from '../helpers/validatorInputs';

function validateInputCreateSale(req: Request, res: Response, next: NextFunction): void {
  const { quantitySold, totalValue, productId, storeId, date } = req.body;

  const payload = { quantitySold, totalValue, productId, storeId, date };

  validatorInputs(payload);

  next();
}

export default validateInputCreateSale;
