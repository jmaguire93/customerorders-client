'use client'

import { useCustomerContext } from '@/contexts/customer-context-provider'
import getOrdersForCustomer from '@/server-actions/get-customers-orders'
import type { Order } from '@/types'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function useCustomerOrders() {
  const { selectedCustomer } = useCustomerContext()
  const [customerOrders, setCustomerOrders] = useState<Order[] | undefined>(
    undefined
  )
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // call server action to get orders for customer
    const fetchOrdersForCustomer = async () => {
      if (!selectedCustomer) {
        setCustomerOrders(undefined)
        return
      }

      setLoading(true)
      const { data, error } = await getOrdersForCustomer(selectedCustomer.id)

      if (error) {
        // throw toast
        toast.error(error)
      }

      setCustomerOrders(data)
      setLoading(false)
    }

    fetchOrdersForCustomer()
  }, [selectedCustomer])

  return { customerOrders, selectedCustomer, loading }
}
