import React from 'react'
import UserStatsSection from './user-stats'
import UserAttendanceSection from './user-attendance'

const UserDashboard = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <UserStatsSection />
      <UserAttendanceSection />
    </div>
  )
}

export default UserDashboard
