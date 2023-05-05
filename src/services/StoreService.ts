import type { Store, StoreInput } from '../entities/Store';
import ErrorApi from '../helpers/ErrorApi';
import BCrypt from '../helpers/BCrypt';
import Prisma from '../models/Prisma';

class StoreService {
  readonly model;
  private readonly _encode: BCrypt;
  constructor() {
    this.model = Prisma;
    this._encode = new BCrypt();
  }

  async findAll(): Promise<Store[]> {
    const allStores = await this.model.store.findMany();
    return allStores as Store[];
  }

  async create(store: StoreInput): Promise<void> {
    const storeFinded = await this.findByEmail(store.email);

    if (storeFinded.email.length > 0) throw new ErrorApi('This email is already registered', 400);

    const { password } = store;
    const hash = this._encode.encryptPassword(password);
    store.password = hash;

    if (!store.admin) {
      const data = { ...store, admin: false };
      await this.model.store.create({ data });
    } else {
      await this.model.store.create({ data: store });
    }
  }

  async removeStore(storeId: number): Promise<void> {
    const result = await this.findById(storeId);

    if (result == null) throw new ErrorApi('Store not found', 404);
    else {
      await this.model.store.delete({ where: { id: storeId } });
    }
  }

  async update(store: Store): Promise<void> {
    const { id, admin, email, name, password, address, phone } = store;
    const result = await this.findById(store.id);

    if (result === null) throw new ErrorApi('Store not found', 404);

    await this.model.store.update({ where: { id }, data: { admin, name, email, password, address, phone } });
  }

  async findByEmail(email: string): Promise<Store> {
    const result = await this.model.store.findFirst({ where: { email } });
    return result as Store;
  }

  async findByName(name: string): Promise<Store> {
    const result = await this.model.store.findFirst({ where: { name } });
    return result as Store;
  }

  async findById(storeId: number): Promise<Store | null> {
    const store = await this.model.store.findUnique({ where: { id: storeId } });
    return store as Store;
  }
}

export default StoreService;
