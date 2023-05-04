interface loginStore {
  email: string
  password: string
}

interface StoreInput extends loginStore {
  name: string
  address?: string
  phone?: string
  admin: boolean
}

interface Store extends StoreInput {
  id: number
}

export type {
  Store,
  StoreInput,
  loginStore
};
