interface ProductInput {
  name: string
  description?: string
  price: number
  quantity: number
  storeId: number
}

interface Product extends ProductInput {
  id: number
}

export type {
  ProductInput,
  Product
};
