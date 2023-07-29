import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Employee from '@/models/Employee'

export const GET = async (request: Promise<void>) => {
  try {
    await connect()
    const employees: any = await Employee.find()
    return new NextResponse(JSON.stringify(employees), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
