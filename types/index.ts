export type Customer = {
  id: number
  name: string
  address: string
  email: string
  created_at: string
}

export type Order = {
  id: number
  order_ref: string
  customer: number
  product: number
  created_at: string
}
