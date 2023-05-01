import type Product from './Product';
import type Sale from './Sale';

interface Store {
  id: number
  name: string
  password: string
  address?: string
  phone?: string
  products: Product[]
  sales: Sale[]
}

export default Store;
