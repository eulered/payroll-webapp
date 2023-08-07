'use client'

import React, { useState } from 'react'

const HamburgerMenu = ({ sidebarDrawer }: { sidebarDrawer: string }) => {
  return (
    <div className="w-10 h-10 md:w-10 md:h-10 rounded-full flex-center transition duration-200">
      <label
        htmlFor={sidebarDrawer}
        className="flex-center daisy-drawer-button w-full h-full group hover:cursor-pointer"
      >
        {/* hamburger icon */}
        {/* <RxHamburgerMenu className="h-[1.2rem] w-[1.2rem] daisy-swap-off fill-current" /> */}
        <div className="w-5 h-4 flex justify-between flex-col transition-all hover:cursor-pointer">
          <div className="ml-2.5 h-0.5 w-1/2 bg-foreground duration-200 group-hover:w-full group-hover:ml-0"></div>
          <div className=" h-0.5 w-full bg-foreground transition"></div>
          <div className="h-0.5 w-1/2 bg-foreground duration-200  group-hover:w-full"></div>
        </div>
      </label>
    </div>
  )
}

export default HamburgerMenu
