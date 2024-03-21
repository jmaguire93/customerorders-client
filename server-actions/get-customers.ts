'use server'

import type { Customer } from '@/types'
import { getErrorMessage } from '@/utils'

export default async function getCustomers(search: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/list?search=${search}`
    )
    const results = (await res.json()) as Customer[]

    // Serialize tasks to plain objects
    return results.map((customer) => ({
      id: customer.id,
      name: customer.name,
      address: customer.address,
      email: customer.email,
      created_at: customer.created_at
    })) as unknown as Customer[]
  } catch (error) {
    throw new Error(getErrorMessage(error))
  }
}
