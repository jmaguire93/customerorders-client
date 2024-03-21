'use client'

import { useCustomerContext } from '@/contexts/customer-context-provider'
import getCustomers from '@/server-actions/get-customers'
import { useQuery } from '@tanstack/react-query'

export default function useCustomers() {
  const { search } = useCustomerContext()
  const queryKey = ['customers', { search }]

  return useQuery({
    queryKey,
    queryFn: () => getCustomers(search)
  })
}
