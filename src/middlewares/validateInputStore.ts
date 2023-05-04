import ErrorApi from '../helpers/ErrorApi';
import type { Request, Response, NextFunction } from 'express';

function validateInputsStore(req: Request, res: Response, next: NextFunction): void {
  const { email, password, name } = req.body;

  const objInputs = { email, password, name };

  Object.entries(objInputs).forEach((input) => {
    const [key, value] = input;
    if (value === undefined) throw new ErrorApi(`${key} is required`, 400);
  });

  next();
}

export default validateInputsStore;
