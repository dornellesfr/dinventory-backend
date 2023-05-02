interface StoreInput {
  name: string
  password: string
  address?: string
  phone?: string
  admin: boolean
}

interface Store extends StoreInput {
  id: number
}

export type {
  Store,
  StoreInput
};
