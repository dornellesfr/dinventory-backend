import type { Product } from './Product';
import type { Sale } from './Sale';

interface StoreInput {
  name: string
  password: string
  address?: string
  phone?: string
  products: Product[]
  sales: Sale[]
  admin: boolean
}

interface Store extends StoreInput {
  id: number
}

export type {
  Store,
  StoreInput
};
