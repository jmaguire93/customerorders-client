'use server'

import type { Order } from '@/types'
import { getErrorMessage } from '@/utils'

export default async function getOrdersForCustomer(
  customerId: number | undefined
) {
  if (!customerId) {
    return [] as Order[]
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/order/list?customer=${customerId}`
    )
    const data = ((await res.json()) || []) as Order[]

    // Serialize tasks to plain objects
    return data.map((order) => ({
      id: order.id,
      order_ref: order.order_ref,
      customer: order.customer,
      product: order.product,
      created_at: order.created_at
    })) as unknown as Order[]
  } catch (error) {
    throw new Error(getErrorMessage(error))
  }
}
