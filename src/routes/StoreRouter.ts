import { type RequestHandler, Router } from 'express';
import StoreController from '../controllers/StoreController';
import validateInputsStore from '../middlewares/validateInputStore';
import validateAdminUser from '../middlewares/authAdmin';
import validateToken from '../middlewares/authJwt';

const storeRouter = Router();
const storeController = new StoreController();

storeRouter.get('/',
  (validateToken as RequestHandler),
  (validateAdminUser as RequestHandler),
  ((req, res) => storeController.findAll(req, res) as unknown) as RequestHandler
);

storeRouter.post('/',
  (validateToken as RequestHandler),
  (validateAdminUser as RequestHandler),
  validateInputsStore,
  (((req, res) => storeController.create(req, res) as unknown) as RequestHandler)
);

storeRouter.put('/',
  (validateToken as RequestHandler),
  (validateAdminUser as RequestHandler),
  ((req, res) => storeController.update(req, res) as unknown) as RequestHandler
);

storeRouter.delete('/',
  (validateToken as RequestHandler),
  (validateAdminUser as RequestHandler),
  ((req, res) => storeController.removeStore(req, res) as unknown) as RequestHandler
);

export default storeRouter;
