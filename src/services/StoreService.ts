import type { Store, StoreInput } from '../entities/Store';
import ErrorApi from '../helpers/ErrorApi';
import StoreModel from '../models/StoreModel';
import BCrypt from '../helpers/BCrypt';

class StoreService {
  readonly model: StoreModel;
  private readonly _encode: BCrypt;
  constructor() {
    this.model = new StoreModel();
    this._encode = new BCrypt();
  }

  async findAll(): Promise<Store[]> {
    const allStores = await this.model.findAll();
    return allStores;
  }

  async create(store: StoreInput): Promise<void> {
    const email = await this.model.findByName(store.email);

    if (email == null) {
      const { password } = store;
      const hash = this._encode.encryptPassword(password);
      store.password = hash;

      if (!store.admin) {
        const data = { ...store, admin: false };
        await this.model.create(data);
      } else {
        await this.model.create(store);
      }
    } else {
      throw new ErrorApi('This email is already registered', 400);
    }
  }

  async removeStore(storeId: number): Promise<void> {
    const result = await this.model.findById(storeId);

    if (result == null) throw new ErrorApi('Store not found', 404);
    else {
      await this.model.removeStore(storeId);
    }
  }

  async update(store: Store): Promise<void> {
    const result = await this.model.findById(store.id);

    if (result == null) throw new ErrorApi('Store not found', 404);
    else {
      await this.model.update(store);
    }
  }

  async findByEmail(email: string): Promise<Store> {
    const result = await this.model.findByEmail(email);
    return result as Store;
  }

  async findByName(name: string): Promise<Store> {
    const result = await this.model.findByName(name);
    return result as Store;
  }
}

export default StoreService;
