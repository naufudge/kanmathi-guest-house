import React from 'react'

interface DashboardProps {
  title: string;
}

const Dashboard: React.FC<DashboardProps> = ({title}) => {
  return (
    <div className='flex w-full bg-white rounded shadow p-8 box-border'>
      <div>
        <h1 className='font-roboto font-bold text-[2rem]'>{title}</h1>
      </div>
    </div>
  )
}

export default Dashboard
