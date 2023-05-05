interface ProductCreate {
  name: string
  description: string | null
  price: number
  quantity: number
  storeId: number
}

interface Product extends ProductCreate {
  id: number
}

export type {
  ProductCreate,
  Product
};
