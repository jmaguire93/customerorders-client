'use client'

import React from 'react'
import CustomerItem from './customer-item'
import CustomerOrders from './customer-orders'
import useCustomers from '@/hooks/use-customers'

export default function CustomerList() {
  const { customers, loading } = useCustomers()

  return (
    <>
      {customers && (
        <div className='flex justify-left mr-auto text-xs'>
          Customers found: {customers.length}
        </div>
      )}
      <div className='mt-4 flex flex-col md:flex-row w-full h-[40rem] border rounded-lg border-gray-300 p-4'>
        <div className='overflow-y-auto md:w-[20rem] px-2 rounded-lg'>
          {customers?.map((customer) => (
            <CustomerItem key={customer.id} customer={customer} />
          ))}
          {!loading && (customers === undefined || customers.length === 0) && (
            <div className='mt-4 text-gray-500'>
              No customers found for this search.
            </div>
          )}
        </div>
        <div className='w-full border bg-gray-200'>
          <CustomerOrders />
        </div>
      </div>
    </>
  )
}
