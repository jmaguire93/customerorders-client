'use client'

import { useCustomerContext } from '@/contexts/customer-context-provider'
import getCustomers from '@/server-actions/get-customers'
import type { Customer } from '@/types'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function useCustomers() {
  const [customers, setCustomers] = useState<Customer[] | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)

  const { search } = useCustomerContext()

  useEffect(() => {
    // call server action to get orders for customer
    const fetchCustomers = async () => {
      setLoading(true)
      const { data, error } = await getCustomers(search)

      if (error) {
        toast.error(error)
      }

      setLoading(false)
      setCustomers(data)
    }

    fetchCustomers()
  }, [search])

  return { customers, loading }
}
