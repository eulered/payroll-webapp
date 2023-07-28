'use client'
import React from 'react'
import Nav from './navbar'
import Sidebar from './sidebar'

function NavBar() {
  return (
    <div className="daisy-drawer">
      <input id="sidebar" type="checkbox" className="daisy-drawer-toggle" />
      <div className="daisy-drawer-content">
        {/* NavBar */}
        <Nav sidebarDrawer="sidebar" />
      </div>

      <div className="daisy-drawer-side">
        <label htmlFor="sidebar" className="daisy-drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  )
}

export default NavBar
