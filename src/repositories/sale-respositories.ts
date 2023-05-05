import type { Sale, SaleInput } from '../entities/Sale';

interface SaleRepository {
  create: (sale: SaleInput) => Promise<void>
  findAll: () => Promise<Sale[]>
  update: (sale: Sale) => Promise<void>
  removeSale: (saleId: number) => Promise<void>
  getSalesByStore: (storeId: number) => Promise<Sale[]>
}

export default SaleRepository;
