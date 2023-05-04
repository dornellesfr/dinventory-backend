import ErrorApi from '../helpers/ErrorApi';
import type { Request, Response, NextFunction } from 'express';

function validateInputsStore(req: Request, res: Response, next: NextFunction): void {
  const { name, email, password } = req.body;

  const objInputs = { name, email, password };

  Object.entries(objInputs).forEach((input) => {
    const [key] = input;
    if (input.length < 1) throw new ErrorApi(`${key} are required`, 400);
  });

  next();
}

export default validateInputsStore;
