'use client'

import React, { useEffect, useState } from 'react'

import { ThemeToggle } from './theme-toggle'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'

interface Props {
  sidebarDrawer: string
}

const Nav = (props: Props) => {
  const { sidebarDrawer } = props
  const [dropdownToggle, setDropdownToggle] = useState(false)

  return (
    <nav className="flex-between w-full h-14 md:h-16 shadow-lg py-2 px-5 border-b">
      {/* <HamburgerButton /> */}
      <div className="w-9 h-9 md:w-10 md:h-10 border rounded-full flex-center transition duration-200 hover:bg-neutral/40">
        <label
          htmlFor={sidebarDrawer}
          className="flex-center daisy-drawer-button w-full h-full hover:cursor-pointer"
        >
          {/* hamburger icon */}
          <RxHamburgerMenu className="h-[1.2rem] w-[1.2rem] daisy-swap-off fill-current" />
        </label>
      </div>

      {/* Webapp Name */}
      <h1 className="font-bold text-lg text-foreground">payroll</h1>

      {/* Right Section */}
      <div className="flex-between gap-3">
        {/* Theme Toggler */}
        <ThemeToggle />

        <div
          className="relative flex-center border-2 rounded-full transition ml-2
                     hover:cursor-pointer hover:border-accent"
        >
          <Image
            alt="user-image"
            className="rounded-full light:fill-primary"
            width={24}
            height={24}
            src="/images/user-default.svg"
            onClick={() => setDropdownToggle(!dropdownToggle)}
          />
          {/* Dropdown */}
          {dropdownToggle && (
            <div
              className="absolute flex-col space-y-3 -bottom-28 right-0
                         bg-neutral w-48 p-3 rounded-lg"
            >
              <Link href="/">Profile</Link>
              <div>
                <button
                  className="border-2 border-accent text-primary-content py-1 px-3 w-full
                             rounded-md transition duration-200 font-medium
                             hover:bg-accent"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
