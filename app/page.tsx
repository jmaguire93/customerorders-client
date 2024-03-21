import Customers from '@/components/customers'
import CustomerSearch from '@/components/customer-search'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import getCustomers from '@/server-actions/get-customers'

export default async function Home() {
  const queryClient = new QueryClient()
  const queryKey = ['customers', { search: '' }]

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getCustomers('')
  })

  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-12 py-24 md:p-24'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CustomerSearch />
        <Customers />
      </HydrationBoundary>
    </main>
  )
}
