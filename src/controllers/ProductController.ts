import ProductService from '../services/ProductService';
import type { Request, Response } from 'express';

class ProductController {
  readonly service: ProductService;
  constructor() {
    this.service = new ProductService();
  }

  async findAll(_req: Request, res: Response): Promise<Response> {
    const result = this.service.findAll();
    return res.status(200).json(result);
  }
}

export default ProductController;
