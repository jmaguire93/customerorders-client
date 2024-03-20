import type { Customer } from '@/types'
import React from 'react'
import CustomerItem from './customer-item'

interface CustomerListProps {
  customers: Customer[] | undefined
  loading: boolean
}

export default function CustomerList({
  customers,
  loading
}: CustomerListProps) {
  return (
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
  )
}
