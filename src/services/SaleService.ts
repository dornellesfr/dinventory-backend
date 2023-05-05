import Prisma from '../models/Prisma';
import type SaleRepository from '../repositories/sale-respositories';
import type { Sale, SaleInput } from '../entities/Sale';
import ErrorApi from '../helpers/ErrorApi';

class SaleService implements SaleRepository {
  private readonly _model;
  constructor() {
    this._model = Prisma;
  };

  async create(sale: SaleInput): Promise<void> {
    await this._model.sale.create({ data: sale });
  }

  async findAll(): Promise<Sale[]> {
    const sales = await this._model.sale.findMany();
    return sales as Sale[];
  }

  async update(sale: Sale): Promise<void> {
    const { id, quantitySold, totalValue, productId, storeId, date } = sale;

    await this._model.sale.update({
      where: { id },
      data: { quantitySold, totalValue, productId, storeId, date }
    });
  }

  async removeSale(saleId: number): Promise<void> {
    const sale = await this._model.sale.findUnique({ where: { id: saleId } });
    if (sale == null) throw new Error('Sale not found');

    await this._model.sale.delete({ where: { id: saleId } });
  }

  async findById(saleId: number): Promise<Sale> {
    const sale = await this._model.sale.findFirst({ where: { id: saleId } });
    if (sale == null) throw new ErrorApi('Sale not found', 404);
    return sale as Sale;
  }

  async getSalesByStore(storeId: number): Promise<Sale[]> {
    const sales = await this._model.sale.findMany({ where: { storeId }, include: { product: true, store: true } });

    if (sales == null) throw new Error('Sales not found');

    return sales as Sale[];
  }
}
export default SaleService;
