import { type RequestHandler, Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.get('/', (req, res) => (productController.findAll(req, res) as unknown) as RequestHandler);

export default productRoutes;
