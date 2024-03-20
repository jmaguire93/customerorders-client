'use client'

import { useCustomerContext } from '@/contexts/customer-context-provider'
import type { Customer } from '@/types'
import React from 'react'

interface CustomerProps {
  customer: Customer
}

export default function CustomerItem({ customer }: CustomerProps) {
  const { selectedCustomer, setSelectedCustomer } = useCustomerContext()

  const onCustomerClick = () => {
    // if current customer is already selected, unselect
    if (selectedCustomer && selectedCustomer.id === customer.id) {
      setSelectedCustomer(null)
    } else {
      setSelectedCustomer(customer)
    }
  }

  return (
    <div
      onClick={onCustomerClick}
      onKeyDown={onCustomerClick}
      className={`px-3 py-3 border cursor-pointer hover:bg-gray-100 ${
        selectedCustomer?.id === customer.id ? 'bg-gray-200' : ''
      }`}
    >
      {customer.name}
    </div>
  )
}
