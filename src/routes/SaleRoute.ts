import { type RequestHandler, Router } from 'express';
import SaleController from '../controllers/SaleController';
import validateToken from '../middlewares/authJwt';
import validateAdminUser from '../middlewares/authAdmin';

const saleRouter = Router();

const saleController = new SaleController();

saleRouter.get('/',
  validateAdminUser as RequestHandler,
  validateToken,
  (req, res) => saleController.findAll(req, res) as unknown as RequestHandler
);

saleRouter.post('/',
  validateToken,
  (req, res) => saleController.create(req, res) as unknown as RequestHandler
);

saleRouter.put('/',
  validateToken,
  (req, res) => saleController.update(req, res) as unknown as RequestHandler
);

saleRouter.delete('/',
  validateToken,
  (req, res) => saleController.removeSale(req, res) as unknown as RequestHandler
);

saleRouter.get('/:id',
  validateToken,
  (req, res) => saleController.findById(req, res) as unknown as RequestHandler
);

saleRouter.get('/store/:storeId',
  validateToken,
  (req, res) => saleController.getAllSalesByStore(req, res) as unknown as RequestHandler
);

export default saleRouter;
