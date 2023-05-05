import SaleService from '../services/SaleService';
import type { Request, Response } from 'express';

class SaleController {
  private readonly _service: SaleService;
  constructor() {
    this._service = new SaleService();
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { quantitySold, totalValue, productId, storeId } = req.body;

    const date = new Date();
    await this._service.create({ quantitySold, totalValue, productId, storeId, date });
    return res.status(201).json({ message: 'Sale created successfully' });
  }

  async findAll(_req: Request, res: Response): Promise<Response> {
    const sales = await this._service.findAll();
    return res.status(200).json(sales);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, quantitySold, totalValue, productId, storeId } = req.body;

    const sale = await this._service.findById(id);

    await this._service.update({ quantitySold, totalValue, productId, storeId, date: sale.date, id });
    return res.status(200).json({ message: 'Sale updated successfully' });
  }

  async removeSale(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    await this._service.removeSale(Number(id));
    return res.status(200).json({ message: 'Sale removed successfully' });
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const sale = await this._service.findById(Number(id));
    return res.status(200).json(sale);
  }

  async getAllSalesByStore(req: Request, res: Response): Promise<Response> {
    const { storeId } = req.params;
    const sales = await this._service.getSalesByStore(Number(storeId));
    return res.status(200).json(sales);
  };
}

export default SaleController;
