import type { Product } from '../entities/Product';
import ProductService from '../services/ProductService';
import type { Request, Response } from 'express';

class ProductController {
  readonly service: ProductService;
  constructor() {
    this.service = new ProductService();
  }

  async findAll(_req: Request, res: Response): Promise<Response> {
    const result = await this.service.findAll();
    return res.status(200).json(result);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, description, price, quantity, storeId } = req.body;
    await this.service.create({ name, description, price, quantity, storeId });
    return res.status(201).json({ message: 'Product created' });
  }

  async remove(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    await this.service.removeProduct(id);
    return res.status(200).json({ message: 'Product removed' });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, name, description, price, quantity, storeId } = req.body;
    const product: Product = { id, name, description, price, quantity, storeId };

    await this.service.update(product);
    return res.status(200).json({ message: 'Product updated' });
  }

  async getProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this.service.findById(Number(id));
    return res.status(200).json(result);
  }
}

export default ProductController;
