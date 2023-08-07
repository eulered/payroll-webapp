'use client'

import React, { useState } from 'react'

import { ThemeToggle } from './theme-toggle'
import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './hamburger-menu'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Props {
  sidebarDrawer: string
}

const Nav = (props: Props) => {
  const { sidebarDrawer } = props
  const [dropdownToggle, setDropdownToggle] = useState(false)

  return (
    <nav className="flex-between w-full h-14 md:h-16 shadow-lg py-2 px-5 border-b">
      <HamburgerMenu sidebarDrawer={sidebarDrawer} />

      {/* Webapp Name */}
      <h1 className="font-medium text-xl text-foreground font-poppins tracking-widest">
        PAYROLL
      </h1>

      {/* Right Section */}
      <div className="flex-between gap-3">
        {/* Theme Toggler */}
        <ThemeToggle />

        <div className="flex-center border-2 rounded-full transition ml-2 hover:cursor-pointer hover:border-accent">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                alt="user-image"
                className="rounded-full light:fill-primary"
                width={24}
                height={24}
                src="/images/user-default.svg"
                onClick={() => setDropdownToggle(!dropdownToggle)}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href="/">Profile</Link>
              <div>
                <button className="border-2 border-accent text-primary-content py-1 px-3 w-full rounded-md transition duration-200 font-medium hover:bg-accent">
                  Logout
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default Nav
