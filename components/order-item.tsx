import type { Order } from '@/types'
import React from 'react'

interface OrderProps {
  order: Order
}

export default function OrderItem({ order }: OrderProps) {
  return (
    <div className='p-4 border border-gray-300 rounded-md shadow-md bg-white'>
      <div className='font-semibold text-lg'>{order.order_ref}</div>
      <div className='flex justify-between mt-2'>
        <div className='text-gray-600'>Order Date: {order.created_at}</div>
        <div className='text-gray-600'>Customer ID: {order.customer}</div>
      </div>
      <div className='mt-2'>
        <span className='font-semibold'>Product ID:</span> {order.product}
      </div>
    </div>
  )
}
