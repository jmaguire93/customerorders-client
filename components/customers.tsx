'use client'

import React, { useEffect } from 'react'
import CustomerOrders from './customer-orders'
import useCustomers from '@/hooks/use-customers'
import CustomerList from './customer-list'
import toast from 'react-hot-toast'

export default function Customers() {
  const { data: customers, isLoading, error } = useCustomers()

  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  return (
    <>
      {customers && (
        <div className='flex justify-left mr-auto text-xs'>
          Customers found: {customers?.length}
        </div>
      )}
      <div className='mt-4 flex flex-col md:flex-row w-full h-[40rem] border rounded-lg border-gray-300 p-4'>
        <CustomerList customers={customers} loading={isLoading} />
        <CustomerOrders />
      </div>
    </>
  )
}
