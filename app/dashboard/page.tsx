import Dashboard from '@/components/Dashboard/Dashboard'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'


const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <div className='bg-black sticky'>
            <div className='text-white p-5 '>Company</div>
        </div>
        <div className='grid grid-cols-[200px,_1fr]'>
            
            <Sidebar />
            <Dashboard />

        </div>
    </div>
  )
}

export default page
