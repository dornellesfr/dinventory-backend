import type { Product, ProductCreate } from '../entities/Product';

interface ProductRepository {
  create: (product: ProductCreate) => Promise<void>
  findAll: () => Promise<Product[]>
  update: (product: Product) => Promise<void>
  removeProduct: (productId: number) => Promise<void>
  findProductsByStore: (storeId: number) => Promise<Product[]>
  findById: (productId: number) => Promise<Product | undefined>
}

export default ProductRepository;
