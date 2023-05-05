import { type RequestHandler, Router } from 'express';
import ProductController from '../controllers/ProductController';
import validateToken from '../middlewares/authJwt';
import validateAdminUser from '../middlewares/authAdmin';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.get('/',
  validateToken,
  validateAdminUser as RequestHandler,
  (req, res) => productController.findAll(req, res) as unknown as RequestHandler
);

productRoutes.post('/',
  validateToken,
  (req, res) => productController.create(req, res) as unknown as RequestHandler
);

productRoutes.delete('/',
  validateToken,
  (req, res) => productController.remove(req, res) as unknown as RequestHandler
);

productRoutes.put('/',
  validateToken,
  (req, res) => productController.update(req, res) as unknown as RequestHandler
);

productRoutes.get('/:id',
  validateToken,
  (req, res) => productController.getProduct(req, res) as unknown as RequestHandler
);

export default productRoutes;
