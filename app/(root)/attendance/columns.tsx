'use client'

import { Button } from '@/components/ui/button'
import { ColumnDef } from '@tanstack/react-table'
import { LuArrowDownUp } from 'react-icons/lu'

export type Attendance = {
  id: number
  name: string
  timeIn: Date
  timeOut: Date
}

export const employeeAttendanceColumns: ColumnDef<Attendance>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <div className="flex-start gap-2">
          <div>Employee</div>
          <Button
            className="py-1 px-2 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  },
  {
    accessorKey: 'timeIn',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-2">
          <div>Time In</div>
          <Button
            className="py-1 px-2 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const date: Date = row.getValue('timeIn')
      const formattedDate: string = new Intl.DateTimeFormat('en-PH', {
        dateStyle: 'long',
        timeStyle: 'short',
        hourCycle: 'h24',
      }).format(date)
      console.log(formattedDate)
      return <div className="text-center font-medium">{formattedDate}</div>
    },
  },
  {
    accessorKey: 'timeOut',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-2">
          <div>Time Out</div>
          <Button
            className="py-1 px-2 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const date: Date = row.getValue('timeOut')
      const formattedDate: string = new Intl.DateTimeFormat('en-PH', {
        dateStyle: 'long',
        timeStyle: 'short',
        hourCycle: 'h24',
      }).format(date)

      return <div className="text-center font-medium">{formattedDate}</div>
    },
  },

  {
    accessorKey: 'shift',
    header: () => <div className="text-center font-medium">Shift</div>,
    cell: ({ row }) => {
      const shiftTime: Date = row.getValue('timeIn')
      const shiftFlag: number = shiftTime.getHours()
      return (
        <div>
          {shiftFlag >= 18 ? (
            <div className="text-center font-medium">Evening</div>
          ) : (
            <div className="text-center font-medium">Morning</div>
          )}
        </div>
      )
    },
  },

  {
    accessorKey: 'totalWorkingHours',
    header: () => <div className="text-center">Hours Rendered</div>,
    cell: ({ row }) => {
      const timein: Date = row.getValue('timeIn')
      const timeout: Date = row.getValue('timeOut')
      const hoursNum: number = Math.abs(timeout.getHours() - timein.getHours())
      const minutesRendered: number = Math.abs(
        60 - timein.getMinutes() + timeout.getMinutes()
      )

      // const renderedHours: number = hoursNum + minutesRendered / 60
      return (
        <div className="text-center font-medium">
          {`${
            minutesRendered / 60 >= 1 ? hoursNum : hoursNum - 1
          } Hrs, ${minutesRendered} mins`}
        </div>
      )
    },
  },
]
