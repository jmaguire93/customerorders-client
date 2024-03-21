'use client'

import getOrdersForCustomer from '@/server-actions/get-customers-orders'
import { useQuery } from '@tanstack/react-query'

export default function useCustomerOrders(customerId: number | undefined) {
  const queryKey = ['orders', { customer: customerId }]

  return useQuery({
    queryKey,
    queryFn: () => getOrdersForCustomer(customerId)
  })
}
