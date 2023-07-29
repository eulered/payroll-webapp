import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Employee from '@/models/Employee'

export const GET = async (request: Promise<void>, { params }: any) => {
  const { id } = params

  try {
    await connect()
    const employee: any = await Employee.findById(id)
    return new NextResponse(JSON.stringify(employee), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
