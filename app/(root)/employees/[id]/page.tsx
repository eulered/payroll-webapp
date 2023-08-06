import Card from '@/components/Card'
import React, { cache } from 'react'
import { Employee } from '@/lib/models/Employee'
async function getData() {
  const res = await fetch('http://localhost:3000/api/employees/', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to load employees')
  }

  return res.json()
}

const page = async () => {
  const employees = await getData()
  return (
    <>
      <Card>
        {employees.map((employee: any) => {
          return (
            <>
              <div className="text-4xl" key={employee._id}>
                {employee.name}
              </div>
              <h1>Hourly Rate: {employee.hourlyRate}</h1>
            </>
          )
        })}
      </Card>
    </>
  )
}

export default page
