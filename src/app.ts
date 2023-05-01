import express, { type Express } from 'express';
import cors from 'cors';

function appFactory (): Express {
  const app = express();

  app.use(cors());
  app.use(express.json());

  return app;
}

export default appFactory;
