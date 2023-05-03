interface loginStore {
  name: string
  password: string
}

interface StoreInput extends loginStore {
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
