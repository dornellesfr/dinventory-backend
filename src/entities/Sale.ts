import type { Product } from './Product';
import type Store from './Store';

interface Sale {
  id: number
  date: number
  quantitySold: number
  totalValue: number
  productId: Product
  storeId: Store
}

export default Sale;
