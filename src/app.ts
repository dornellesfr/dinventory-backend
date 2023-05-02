import express, { type Express } from 'express';
import cors from 'cors';
import productRoutes from './routes/ProductRoute';
import storeRouter from './routes/StoreRouter';

function appFactory(): Express {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/store', storeRouter);
  app.use('/product', productRoutes);

  return app;
}

export default appFactory;
