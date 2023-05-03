import type { Store, StoreInput } from '../entities/Store';
import ErrorApi from '../helpers/ErrorApi';
import StoreModel from '../models/StoreModel';

class StoreService {
  readonly model: StoreModel;
  constructor() {
    this.model = new StoreModel();
  }

  async findAll(): Promise<Store[]> {
    const allStores = await this.model.findAll();
    return allStores;
  }

  async create(store: StoreInput): Promise<void> {
    if (store.name.length < 1) throw new ErrorApi('Name is required', 400);
    if (store.password.length < 1) throw new ErrorApi('Password is required', 400);

    if (!store.admin) {
      const data = { ...store, admin: false };
      await this.model.create(data);
    } else {
      await this.model.create(store);
    }
  }

  async removeStore(storeId: number): Promise<void> {
    const result = await this.model.findStoreById(storeId);

    if (result == null) throw new ErrorApi('Store not found', 404);
    else {
      await this.model.removeStore(storeId);
    }
  }

  async update(store: Store): Promise<void> {
    const result = await this.model.findStoreById(store.id);

    if (result == null) throw new ErrorApi('Store not found', 404);
    else {
      await this.model.update(store);
    }
  }
}

export default StoreService;
