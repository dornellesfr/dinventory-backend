import type { StoreInput } from '../entities/Store';
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

  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, admin } = req.body;
    const store: StoreInput = { name, email, password, admin };

    await this.service.create(store);
    return res.status(201).json({ message: 'Store created' });
  }

  async removeStore(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    await this.service.removeStore(Number(id));
    return res.status(200).json({ message: 'Store removed' });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const store = req.body;
    await this.service.update(store);
    return res.status(200).json({ message: 'Store updated' });
  }
}

export default StoreController;
