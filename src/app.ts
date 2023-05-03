import express, { type Express } from 'express';
import 'express-async-errors';
import cors from 'cors';
import productRoutes from './routes/ProductRoute';
import storeRouter from './routes/StoreRouter';
import errorMiddleware from './middlewares/ErrorMiddleware';

function appFactory(): Express {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/store', storeRouter);
  app.use('/product', productRoutes);

  app.use(errorMiddleware);
  return app;
}

export default appFactory;
