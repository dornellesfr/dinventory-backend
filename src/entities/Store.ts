import type { Product } from './Product';
import type { Sale } from './Sale';

interface StoreInput {
  id: number
}

interface Store extends StoreInput {
  name: string
  password: string
  address?: string
  phone?: string
  products: Product[]
  sales: Sale[]
}

export type {
  Store,
  StoreInput
};
