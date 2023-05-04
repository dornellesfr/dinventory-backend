import type { Request, Response, NextFunction } from 'express';
import type ErrorApi from '../helpers/ErrorApi';

function errorMiddleware(error: Error & Partial<ErrorApi>, req: Request, res: Response, next: NextFunction): Response {
  const statusCode = error.statusCode ?? 500;
  return res.status(statusCode).json({ message: error.message });
}

export default errorMiddleware;
