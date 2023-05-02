import type { Request, Response, NextFunction } from 'express';

function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction): Response {
  return res.status(500).json({ message: error.message });
}

export default errorMiddleware;
