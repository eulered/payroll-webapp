'use client'

import Card from '@/components/Card'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const UserAttendanceSection = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000)
  })
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
      <div>
        <Card>
          <h1 className="text-4xl">TIME IN</h1>
          <p>
            {new Intl.DateTimeFormat('en-PH', {
              timeStyle: 'short',
              hourCycle: 'h24',
            }).format(currentTime)}
          </p>
          <Button variant="outline">Time In</Button>
        </Card>
      </div>

      <div>
        <Card>
          <h1 className="text-4xl">TIME OUT</h1>
          <p>
            Current Time:{' '}
            {new Intl.DateTimeFormat('en-PH', {
              timeStyle: 'short',
              hourCycle: 'h24',
            }).format(currentTime)}
          </p>
        </Card>
      </div>
    </section>
  )
}

export default UserAttendanceSection
