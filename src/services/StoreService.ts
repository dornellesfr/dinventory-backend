import type { Store, StoreInput } from '../entities/Store';
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
    await this.model.create(store);
  }
}

export default StoreService;
