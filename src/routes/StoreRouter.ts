import { type RequestHandler, Router } from 'express';
import StoreController from '../controllers/StoreController';

const storeRouter = Router();
const storeController = new StoreController();

storeRouter.get('/', ((req, res) => storeController.findAll(req, res) as unknown) as RequestHandler);
storeRouter.post('/', ((req, res) => storeController.create(req, res) as unknown) as RequestHandler);
storeRouter.patch('/', ((req, res) => storeController.update(req, res) as unknown) as RequestHandler);
storeRouter.delete('/', ((req, res) => storeController.removeStore(req, res) as unknown) as RequestHandler);

export default storeRouter;
