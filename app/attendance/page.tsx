import React from 'react'
import { EmployeesAttendanceTable } from './data-table'
import { Attendance, employeeAttendanceColumns } from './columns'

async function getData(): Promise<Attendance[]> {
  // Fetch data from your API here.
  return [
    {
      id: 123,
      name: 'Molavin, Jorelyn E.',
      timeIn: new Date(),
      timeOut: new Date(2023, 0o6, 0o6, 10, 0o2, 41, 11),
    },
    {
      id: 124,
      name: 'Reyes, Jed Paul S.',
      timeIn: new Date(Date.UTC(2023, 0o6, 0o5, 21, 57, 29, 738)),
      timeOut: new Date(Date.UTC(2023, 0o6, 0o6, 10, 0o7, 41, 738)),
    },
    // ...
  ]
}

export default async function EmployeesAttendancePage() {
  const data = await getData()
  return (
    <>
      <EmployeesAttendanceTable
        columns={employeeAttendanceColumns}
        data={data}
      />
    </>
  )
}
