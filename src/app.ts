import express, { type Express } from 'express';
import cors from 'cors';
import productRoutes from './routes/ProductRoute';

function appFactory(): Express {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/product', productRoutes);

  return app;
}

export default appFactory;
