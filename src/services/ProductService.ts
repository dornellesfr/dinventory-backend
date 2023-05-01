import type { Product } from '../entities/Product';
import ProductModel from '../models/ProductModel';

class ProductService {
  readonly model: ProductModel;
  constructor() {
    this.model = new ProductModel();
  }

  async findAll(): Promise<Product[] | string> {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      return (error as Error).message;
    }
  }
}

export default ProductService;
