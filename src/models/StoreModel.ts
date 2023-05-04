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

  async removeStore(storeId: number): Promise<void> {
    await Prisma.store.delete({ where: { id: storeId } });
  }

  async findById(storeId: number): Promise<Store | null> {
    const store = await Prisma.store.findUnique({ where: { id: storeId } });
    return store as Store;
  }

  async findByName(name: string): Promise<Store | null | undefined> {
    const store = await Prisma.store.findFirst({ where: { name } });
    return store as Store;
  }

  async update(store: Store): Promise<void> {
    const { id, admin, email, name, password, address, phone } = store;
    await Prisma.store.update({ where: { id }, data: { admin, name, email, password, address, phone } });
  }
}

export default StoreModel;
