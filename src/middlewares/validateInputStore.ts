import ErrorApi from '../helpers/ErrorApi';
import type { Request, Response, NextFunction } from 'express';

function validateInputsStore(req: Request, res: Response, next: NextFunction): void {
  const { email, password } = req.body;

  const objInputs = { email, password };

  Object.entries(objInputs).forEach((input) => {
    const [key, value] = input;
    if (value.length < 1) throw new ErrorApi(`${key} is required`, 400);
  });

  next();
}

export default validateInputsStore;
