import { type RequestHandler, Router } from 'express';
import StoreController from '../controllers/StoreController';
import validateInputsStore from '../middlewares/validateInputStore';
import validateAdminUser from '../middlewares/authAdmin';

const storeRouter = Router();
const storeController = new StoreController();

storeRouter.get('/',
  (validateAdminUser as RequestHandler),
  ((req, res) => storeController.findAll(req, res) as unknown) as RequestHandler
);

storeRouter.post('/',
  (validateAdminUser as RequestHandler),
  validateInputsStore,
  (((req, res) => storeController.create(req, res) as unknown) as RequestHandler)
);

storeRouter.put('/',
  (validateAdminUser as RequestHandler),
  ((req, res) => storeController.update(req, res) as unknown) as RequestHandler
);

storeRouter.delete('/',
  (validateAdminUser as RequestHandler),
  ((req, res) => storeController.removeStore(req, res) as unknown) as RequestHandler
);

export default storeRouter;
