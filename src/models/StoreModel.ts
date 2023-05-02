import Prisma from './db/Prisma';
import type { Store } from '../entities/Store';
import type StoreRepository from '../repositories/store-respositories';

class StoreModel implements StoreRepository {
  async findAll(): Promise<Store[]> {
    const allStores = await Prisma.store.findMany();
    return allStores as Store[];
  }
}

export default StoreModel;
