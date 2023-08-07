'use client'

import React, { useContext } from 'react'
import Link from 'next/link'

import { RiApps2Line, RiTeamLine, RiBillLine } from 'react-icons/ri'
import { BsCalendarWeek } from 'react-icons/bs'

const Sidebar = ({ sidebarDrawer }: { sidebarDrawer: string }) => {
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
      <nav className="fixed inset-y-0 w-64 bg-background border-e shadow-2xl">
        <div className="flex flex-col justify-center space-y-2">
          <header className="h-16 flex-between px-4 py-2 border-b">
            {/* Sidebar Header */}
            <h1 className="font-medium text-lg ml-3 text-foreground font-poppins tracking-widest">
              PAYROLL
            </h1>

            {/* Close button */}
            <div className="w-10 h-10 md:w-10 md:h-10 rounded-full flex-center transition duration-200 hover:bg-secondary">
              <label
                htmlFor={sidebarDrawer}
                className="flex-center daisy-drawer-button group hover:cursor-pointer"
              >
                <div className="group w-5 h-4 transition-all hover:cursor-pointer">
                  <div className="h-0.5 w-full rotate-45 bg-foreground translate-y-1.5"></div>
                  <div className="h-0.5 w-full -rotate-45 bg-foreground translate-y-1"></div>
                </div>
              </label>
            </div>
          </header>

          {/* Sidebar Items */}
          <div className="px-3.5">
            {sidebarItems.map(({ id, label, address, icon }) => {
              return (
                // Sidebar Item Container
                <Link href={address} key={id}>
                  <div className="flex-start rounded-xl px-2 py-4 transition hover:bg-secondary hover:cursor-pointer">
                    <span className="mx-3">{icon}</span>
                    {label}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
