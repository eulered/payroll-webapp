import React from 'react'

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full">
      <main className="py-4 px-5 min-h-screen">{children}</main>
    </div>
  )
}

export default MainContent
