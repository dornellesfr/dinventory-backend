import type { Store, StoreInput } from '../entities/Store';

interface StoreRepository {
  create: (store: StoreInput) => Promise<void>
  findAll: () => Promise <Store[]>
  update: (store: Store) => Promise<void>
  removeStore: (storeId: number) => Promise<void>
  findById: (storeId: number) => Promise<Store | null>
  findByName: (name: string) => Promise<Store | null | undefined>
}

export default StoreRepository;
