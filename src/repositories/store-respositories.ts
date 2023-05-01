import type { Store, StoreInput } from '../entities/Store';

interface StoreRepository {
  create: (store: StoreInput) => Promise<void>
  findAll: () => Promise <Store[]>
  update: (storeId: number) => Promise<void>
  removeStore: (storeId: number) => Promise<void>
}

export default StoreRepository;
