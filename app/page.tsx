import Customers from '@/components/customers'
import CustomerSearch from '@/components/customer-search'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-12 py-24 md:p-24'>
      <CustomerSearch />
      <Customers />
    </main>
  )
}
