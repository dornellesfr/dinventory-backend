import type { Request, Response, NextFunction } from 'express';
import validatorInputs from '../helpers/validatorInputs';

function validateInputsStore(req: Request, _res: Response, next: NextFunction): void {
  const { email, password, name } = req.body;

  const objInputs = { email, password, name };

  validatorInputs(objInputs);

  next();
}

export default validateInputsStore;
