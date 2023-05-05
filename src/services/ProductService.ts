import type { Product, ProductCreate } from '../entities/Product';
import type ProductRepository from '../repositories/product-respositories';
import Prisma from '../models/Prisma';
import ErrorApi from '../helpers/ErrorApi';

class ProductService implements ProductRepository {
  private readonly _model;
  constructor() {
    this._model = Prisma;
  }

  async findById(productId: number): Promise<Product | undefined > {
    const product = await this._model.product.findUnique({ where: { id: productId } });

    if (product == null) throw new ErrorApi('Product not found', 404);

    return product as Product;
  }

  async findProductsByStore(storeId: number): Promise<Product[]> {
    const products = await this._model.product.findMany({ where: { storeId } });

    if (products === null) throw new ErrorApi('Products not found', 404);

    return products as Product[];
  }

  async findAll(): Promise<Product[]> {
    const allProducts = await this._model.product.findMany();
    return allProducts as Product[];
  }

  async create(product: ProductCreate): Promise<void> {
    await this._model.product.create({ data: product });
  };

  async removeProduct(productId: number): Promise<void> {
    const product = await this.findById(productId);

    if (product == null) throw new ErrorApi('Product not found', 404);

    await this._model.product.delete({ where: { id: productId } });
  }

  async update(product: Product): Promise<void> {
    const { id, name, price, quantity, description } = product;
    const result = await this.findById(id);

    if (result === null) throw new ErrorApi('Product not found', 404);

    await this._model.product.update({ where: { id }, data: { name, price, quantity, description } });
  }
}

export default ProductService;
