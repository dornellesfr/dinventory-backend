import type { Store, StoreInput } from '../entities/Store';
import ErrorApi from '../helpers/ErrorApi';
import BCrypt from '../helpers/BCrypt';
import Prisma from '../database/Prisma';

class StoreService {
  private readonly _model;
  private readonly _encode: BCrypt;
  constructor() {
    this._model = Prisma;
    this._encode = new BCrypt();
  }

  async findAll(): Promise<Store[]> {
    const allStores = await this._model.store.findMany();
    return allStores as Store[];
  }

  async create(store: StoreInput): Promise<void> {
    const storeFinded = await this.findByEmail(store.email);

    if (storeFinded !== null) throw new ErrorApi('This email is already registered', 400);

    const hash = this._encode.encryptPassword(store.password);
    store.password = hash;

    if (!store.admin) {
      const data = { ...store, admin: false };
      await this._model.store.create({ data });
    } else {
      await this._model.store.create({ data: store });
    }
  }

  async removeStore(storeId: number): Promise<void> {
    const result = await this.findById(storeId);

    if (result == null) throw new ErrorApi('Store not found', 404);

    await this._model.store.delete({ where: { id: storeId } });
  }

  async update(store: Store): Promise<void> {
    const { id, admin, email, name, password, address, phone } = store;
    const result = await this.findById(store.id);

    if (result === null) throw new ErrorApi('Store not found', 404);

    await this._model.store.update({ where: { id }, data: { admin, name, email, password, address, phone } });
  }

  async findByEmail(email: string): Promise<Store> {
    const result = await this._model.store.findFirst({ where: { email } });
    return result as Store;
  }

  async findByName(name: string): Promise<Store> {
    const result = await this._model.store.findFirst({ where: { name } });
    return result as Store;
  }

  async findById(storeId: number): Promise<Store | null> {
    const store = await this._model.store.findUnique({ where: { id: storeId } });
    return store as Store;
  }
}

export default StoreService;
