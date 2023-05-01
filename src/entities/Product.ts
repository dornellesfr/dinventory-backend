interface ProductInput {
  name: string
  description: string | null
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
