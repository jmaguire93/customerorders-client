'use server'

import type { Order } from '@/types'
import { getErrorMessage } from '@/utils'

export default async function getOrdersForCustomer(customerId: number) {
  try {
    const res = await fetch(
      `http://localhost:8085/order/list?customer=${customerId}`
    )
    const data = ((await res.json()) || []) as Order[]

    return { data }
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
