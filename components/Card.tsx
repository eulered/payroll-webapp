import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-border border-1.5 rounded-xl p-4">
      {children}
    </div>
  )
}

export default Card
