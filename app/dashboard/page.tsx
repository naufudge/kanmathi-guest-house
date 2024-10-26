import Dashboard from '@/components/Dashboard/Dashboard'
import DashNavBar from '@/components/Dashboard/DashNavBar'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'


const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <DashNavBar />
        <div className='grid grid-cols-[200px,_1fr] h-full'>
            
            <Sidebar />
            <Dashboard />

        </div>
    </div>
  )
}

export default page
