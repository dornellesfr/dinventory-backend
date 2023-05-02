import StoreService from '../services/StoreService';
import type { Request, Response } from 'express';

class StoreController {
  readonly service: StoreService;
  constructor() {
    this.service = new StoreService();
  }

  async findAll(_req: Request, res: Response): Promise<Response> {
    const allStores = await this.service.findAll();
    return res.status(200).json(allStores);
  }
}

export default StoreController;
