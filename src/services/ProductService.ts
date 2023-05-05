import type { Product } from '../entities/Product';
import type ProductRepository from '../repositories/product-respositories';
import Prisma from '../models/Prisma';

class ProductService implements ProductRepository {
  private readonly _model;
  constructor() {
    this._model = Prisma;
  }
}

export default ProductService;
