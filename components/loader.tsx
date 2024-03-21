import { LoaderIcon } from 'lucide-react'
import React from 'react'

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-16'>
      <LoaderIcon className='animate-spin text-gray-500' />
    </div>
  )
}
