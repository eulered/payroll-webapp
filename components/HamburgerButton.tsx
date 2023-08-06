'use client'

import React, { ChangeEvent, useState } from 'react'

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const HamburgerButton = () => {
  return (
    <div className="w-10 h-10 border rounded-full flex-center">
      <label className="daisy-swap daisy-swap-rotate w-full h-full">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        {/* hamburger icon */}
        <RxHamburgerMenu className="h-[1.2rem] w-[1.2rem] hover:bg-secondary hover:fill-secondary-foreground daisy-swap-off fill-current" />

        {/* close icon */}
        <RxCross1 className="h-[1.2rem] w-[1.2rem] daisy-swap-on fill-current" />
      </label>
    </div>
  )
}

export default HamburgerButton
