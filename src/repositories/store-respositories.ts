import type { Store, StoreInput } from '../entities/Store';

interface StoreRepository {
  create: (store: StoreInput) => Promise<void>
  findAll: () => Promise <Store[]>
  update: (store: Store) => Promise<void>
  removeStore: (storeId: number) => Promise<void>
  findStoreById: (storeId: number) => Promise<Store | null>
}

export default StoreRepository;
