'use server'

import type { Customer } from '@/types'
import { getErrorMessage } from '@/utils'

export default async function getCustomers(search: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/list?search=${search}`
    )
    const data = ((await res.json()) || []) as Customer[]

    return { data }
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
