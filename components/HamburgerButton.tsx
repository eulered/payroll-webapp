'use client'

import React, { ChangeEvent, useContext } from 'react'
import NavContext from './nav-context'

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { Button } from './ui/button'

const HamburgerButton = () => {
  const { sidebarToggle, setSidebarToggle } = useContext(NavContext)
  console.log(sidebarToggle)
  return (
    <div className="w-10 h-10 border rounded-full flex-center hover:bg-neutral/40">
      <label className="daisy-swap daisy-swap-rotate w-full h-full">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          checked={sidebarToggle === true}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSidebarToggle(e.target.checked ? true : false)
          }
        />

        {/* hamburger icon */}
        <RxHamburgerMenu className="h-[1.2rem] w-[1.2rem] daisy-swap-off fill-current" />

        {/* close icon */}
        <RxCross1 className="h-[1.2rem] w-[1.2rem] daisy-swap-on fill-current" />
      </label>
    </div>
  )
}

export default HamburgerButton
