'use client'

import useCustomerOrders from '@/hooks/use-customer-orders'
import React from 'react'
import OrderItem from './order-item'

export default function CustomerOrders() {
  const { customerOrders, selectedCustomer, loading } = useCustomerOrders()

  return (
    <div className='p-3 overflow-y-auto max-h-[20rem] sm:max-h-full w-full border bg-gray-200'>
      {selectedCustomer ? (
        <>
          <div className='mb-4 text-lg font-semibold'>
            Orders for {selectedCustomer.name}:
          </div>
          {customerOrders?.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
          {!loading &&
            (customerOrders === undefined || customerOrders.length === 0) && (
              <div className='mt-4 text-gray-500'>
                No orders have been booked for this customer yet.
              </div>
            )}
        </>
      ) : (
        <div className='text-gray-500'>
          Select a customer to view their orders.
        </div>
      )}
    </div>
  )
}
