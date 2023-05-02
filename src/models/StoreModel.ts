import Prisma from './db/Prisma';
import type { Store, StoreInput } from '../entities/Store';
import type StoreRepository from '../repositories/store-respositories';

class StoreModel implements StoreRepository {
  async findAll(): Promise<Store[]> {
    const allStores = await Prisma.store.findMany();
    return allStores as Store[];
  }

  async create(store: StoreInput): Promise<void> {
    await Prisma.store.create({ data: store });
  }
}

export default StoreModel;
