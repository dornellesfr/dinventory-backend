interface SaleInput {
  quantitySold: number
  totalValue: number
  productId: number
  storeId: number
  date: Date
}

interface Sale extends SaleInput {
  id: number
}

export type {
  SaleInput,
  Sale
};
