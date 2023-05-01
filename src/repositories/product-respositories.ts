import type { Product, ProductInput } from '../entities/Product';

interface ProductsRepository {
  create: (product: ProductInput) => Promise<void>
  findAll: () => Promise<Product[]>
  update: (productId: number) => Promise<void>
  removeProduct: (productId: number) => Promise<void>
}

export default ProductsRepository;
