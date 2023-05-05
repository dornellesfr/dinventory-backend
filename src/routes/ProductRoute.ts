import { type RequestHandler, Router } from 'express';
import ProductController from '../controllers/ProductController';
import validateToken from '../middlewares/authJwt';
import validateAdminUser from '../middlewares/authAdmin';
import validateCreateProduct from '../middlewares/validateCreateProduct';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.get('/:id',
  validateToken,
  (req, res) => productController.getProduct(req, res) as unknown as RequestHandler
);

productRoutes.get('/store/:storeId',
  validateToken,
  (req, res) => productController.getProductsByStore(req, res) as unknown as RequestHandler
);

productRoutes.get('/',
  validateToken,
  validateAdminUser as RequestHandler,
  (req, res) => productController.findAll(req, res) as unknown as RequestHandler
);

productRoutes.post('/',
  validateCreateProduct,
  validateToken,
  (req, res) => productController.create(req, res) as unknown as RequestHandler
);

productRoutes.delete('/',
  validateToken,
  (req, res) => productController.remove(req, res) as unknown as RequestHandler
);

productRoutes.put('/',
  validateCreateProduct,
  validateToken,
  (req, res) => productController.update(req, res) as unknown as RequestHandler
);

export default productRoutes;
