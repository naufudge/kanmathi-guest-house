import Dashboard from '@/components/Dashboard/Dashboard'
import DashNavBar from '@/components/Dashboard/DashNavBar'
import AppSidebar from '@/components/Sidebar/Sidebar'
import React from 'react'


const page = () => {
  return (
    <div className='flex flex-col h-screen max-h-full'>
        <DashNavBar />
        <div className='grid grid-cols-[200px,_1fr] h-full'>
            
            <AppSidebar />
            <Dashboard title='Home' />

        </div>
    </div>
  )
}

export default page
