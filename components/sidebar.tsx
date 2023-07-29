'use client'

import React, { useContext } from 'react'
import Link from 'next/link'

import { RiApps2Line, RiTeamLine, RiBillLine } from 'react-icons/ri'
import { BsCalendarWeek } from 'react-icons/bs'

const Sidebar = () => {
  // Sidebar Items
  const sidebarItems = [
    {
      id: 1,
      label: 'Dashboard',
      address: '/dashboard',
      icon: <RiApps2Line />,
    },
    {
      id: 2,
      label: 'Payroll',
      address: '/payroll',
      icon: <RiBillLine />,
    },
    {
      id: 3,
      label: 'Employees',
      address: '/employees',
      icon: <RiTeamLine />,
    },
    {
      id: 4,
      label: 'Attendance',
      address: '/attendance',
      icon: <BsCalendarWeek />,
    },
  ]

  return (
    <>
      <nav className="fixed inset-y-0 w-64 py-4 px-2 bg-base-100 border-e-2 rounded-r-2xl shadow-2xl">
        <div className="flex flex-col justify-center space-y-2">
          <header className="mb-4 flex-start px-4 py-1.5 border-b-2">
            <p className="text-2xl">payroll</p>
          </header>
          {sidebarItems.map(({ id, label, address, icon }) => {
            return (
              // Sidebar Item Container
              <Link href={address} key={id}>
                <div
                  className="flex-start rounded-xl px-2 py-4 transition 
                       hover:bg-slate-700/60 hover:cursor-pointer"
                >
                  <span className="mx-3">{icon}</span>
                  {label}
                </div>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Sidebar
