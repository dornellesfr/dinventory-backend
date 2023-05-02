import { type RequestHandler, Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.get('/', productController.findAll as RequestHandler);

export default productRoutes;
