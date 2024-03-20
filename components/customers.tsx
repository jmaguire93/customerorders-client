'use client'

import React from 'react'
import CustomerOrders from './customer-orders'
import useCustomers from '@/hooks/use-customers'
import CustomerList from './customer-list'

export default function Customers() {
  const { customers, loading } = useCustomers()

  return (
    <>
      {customers && (
        <div className='flex justify-left mr-auto text-xs'>
          Customers found: {customers.length}
        </div>
      )}
      <div className='mt-4 flex flex-col md:flex-row w-full h-[40rem] border rounded-lg border-gray-300 p-4'>
        <CustomerList customers={customers} loading={loading} />
        <CustomerOrders />
      </div>
    </>
  )
}
