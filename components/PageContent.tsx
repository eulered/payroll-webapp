import React from 'react'

const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" min-h-screen w-full">
      <main className="py-4 px-5">{children}</main>
    </div>
  )
}

export default PageContent
