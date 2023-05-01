import type { Product } from './Product';
import type { Store } from './Store';

interface SaleInput {
  date: number
  quantitySold: number
  totalValue: number
  productId: Product
  storeId: Store
}

interface Sale extends SaleInput {
  id: number
}

export type {
  SaleInput,
  Sale
};
