'use client'

import { useCustomerContext } from '@/contexts/customer-context-provider'
import React from 'react'

export default function CustomerSearch() {
  const { setSearch } = useCustomerContext()

  return (
    <div className='flex flex-col items-center justify-center'>
      <label className='text-sm mb-2'>Search for a customer</label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className='px-4 h-8 rounded-lg border border-gray-300 focus:border-black outline-none focus:outline-black'
      />
    </div>
  )
}
