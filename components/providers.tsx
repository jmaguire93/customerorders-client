'use client'

import CustomerContextProvider from '@/contexts/customer-context-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type React from 'react'

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <CustomerContextProvider>{children}</CustomerContextProvider>
    </QueryClientProvider>
  )
}
