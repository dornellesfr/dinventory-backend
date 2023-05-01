import Prisma from './db/Prisma';
import type ProductRepository from '../repositories/product-respositories';
import type { Product } from '../entities/Product';

class ProductModel implements ProductRepository {
  async findAll(): Promise<Product[]> {
    const products = await Prisma.product.findMany({ include: { store: true } });

    return products;
  }
  // async create(): Promise<Product[]> {

  // }
  // async update(productId: number): Promise<void> {

  // }
  // async removeProduct(productId: number): Promise<void> {

  // }
}

export default ProductModel;
