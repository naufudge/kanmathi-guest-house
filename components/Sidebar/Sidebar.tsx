'use client';

import { getObjectKeyValues } from '@/lib/HelperFunctions'
import { ChevronRight, Home, MessageCircle, User, Users } from 'lucide-react';
import React, { useState } from 'react'

const MenuItems = {
    Main: [],
    Messages: [],
    Employees: [],
    Profile: [
        "Page 1"
    ]
}

const MenuIcons = [
  <Home className='w-5 h-5' />,
  <MessageCircle className='w-5 h-5' />,
  <Users className='w-5 h-5' />,
  <User className='w-5 h-5' />
]

const AppSidebar = () => {
  const subMenus = getObjectKeyValues(MenuItems)
  
  const [subMenuStates, setSubMenuStates] = useState({
    Main: false,
    Profile: false
  })

  
  const manageMenuClick = (menu: string) => {
    if (MenuItems[menu as keyof typeof MenuItems].length != 0) {
      if (menu === "Profile") {
        setSubMenuStates({...subMenuStates, Profile: !subMenuStates.Profile}) 
      } else if (menu === "Main") {
        setSubMenuStates({...subMenuStates, Main: !subMenuStates.Main}) 
      }
    }
  }

  return (
    <div className='bg-stone-100 font-poppins text-stone-950'>
      <div className='flex flex-col gap-4 px-4 mt-5'>
        {Object.keys(MenuItems).map((item, index) => (
            <div key={index} className='place-items-center transition-all duration-300'>
                <div
                onClick={() => manageMenuClick(item)}
                className='flex p-3 justify-between place-items-center hover:bg-slate-200 hover:cursor-pointer rounded-lg'
                >
                  <div className='flex gap-3'>
                    <div>{MenuIcons[index]}</div>
                    <div>{item}</div>
                  </div>
                  {subMenus[index] != "" && 
                    <ChevronRight className={`transition-all duration-300 w-5 h-5 ${subMenuStates[item as keyof typeof subMenuStates] ? "rotate-90" : ""}`} />
                  }
                </div>
                {subMenus[index] != "" && 
                  <div className={`transition-all duration-300 mt-2 ${subMenuStates[item as keyof typeof subMenuStates] ? "" : "hidden"}`}>
                    { MenuItems[item as keyof typeof MenuItems].map((item, index) => (
                      <div key={index} className='text-stone-500 hover:bg-slate-200 hover:cursor-pointer p-1 rounded-md'>
                        <span className='ml-11 italic'>{item}</span>
                      </div>
                    ))}
                  </div>
                }
            </div>
        ))}
      </div>
    </div>
  )
}

export default AppSidebar
