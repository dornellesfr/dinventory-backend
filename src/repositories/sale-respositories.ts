import type { Sale, SaleInput } from '../entities/Sale';

interface SaleRepository {
  create: (sale: SaleInput) => Promise<void>
  findAll: () => Promise<Sale[]>
  update: (saleId: number) => Promise<void>
  removeSale: (saleId: number) => Promise<void>
}

export default SaleRepository;
