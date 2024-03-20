'use client'

import type { Customer } from '@/types'
import type React from 'react'
import { createContext, useContext, useState } from 'react'

type CustomerContextProviderProps = {
  children: React.ReactNode
}

type CustomerContextType = {
  selectedCustomer: Customer | null
  setSelectedCustomer: React.Dispatch<React.SetStateAction<Customer | null>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const CustomerContext = createContext<CustomerContextType | null>(null)

export default function CustomerContextProvider({
  children
}: CustomerContextProviderProps) {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  )
  const [search, setSearch] = useState<string>('')

  return (
    <CustomerContext.Provider
      value={{
        selectedCustomer,
        setSelectedCustomer,
        search,
        setSearch
      }}
    >
      {children}
    </CustomerContext.Provider>
  )
}

export function useCustomerContext() {
  const context = useContext(CustomerContext)

  if (context === null) {
    throw new Error(
      'useCustomerContext must be used within a CustomerContextProvider'
    )
  }

  return context
}
