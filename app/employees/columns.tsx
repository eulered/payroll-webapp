'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { LuArrowDownUp } from 'react-icons/lu'

export type Employee = {
  id: number
  name: string
  undertime: number
  normalHrs: number
  otHrs: number
  nsdHrs: number
  otnsdHrs: number
  totalHrs: number
  hourlyRate: number
}

export const employeeTableColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-1">
          <div className="text-center">ID</div>
          <Button
            className="py-1 px-1 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const rowValue = parseFloat(row.getValue('id'))
      return <div className="text-center font-medium">{rowValue}</div>
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <div className="flex-start gap-1">
          <div className="text-left">Employee</div>
          <Button
            className="py-1 px-1 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const rowValue: string = row.getValue('name')
      return <div className="text-left font-medium">{rowValue}</div>
    },
  },
  {
    accessorKey: 'undertime',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-1">
          <div className="text-center">Undertime</div>
          <Button
            className="py-1 px-1 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const rowValue = parseFloat(row.getValue('undertime'))
      return (
        <div className="text-center font-medium">
          {rowValue === 0 ? '-' : rowValue}
        </div>
      )
    },
  },
  {
    accessorKey: 'normalHrs',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-1">
          <div className="text-center">Regular Hours</div>
          <Button
            className="py-1 px-1 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const rowValue = parseFloat(row.getValue('normalHrs'))
      return (
        <div className="text-center font-medium">
          {rowValue === 0 ? '-' : rowValue}
        </div>
      )
    },
  },
  {
    accessorKey: 'otHrs',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-1">
          <div className="text-center">Overtime</div>
          <Button
            className="py-1 px-1 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const rowValue = parseFloat(row.getValue('otHrs'))
      return (
        <div className="text-center font-medium">
          {rowValue === 0 ? '-' : rowValue}
        </div>
      )
    },
  },
  {
    accessorKey: 'nsdHrs',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-1">
          <div className="text-center">NSD</div>
          <Button
            className="py-1 px-1 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const rowValue = parseFloat(row.getValue('nsdHrs'))
      return (
        <div className="text-center font-medium">
          {rowValue === 0 ? '-' : rowValue}
        </div>
      )
    },
  },
  {
    accessorKey: 'otnsdHrs',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-1">
          <div className="text-center">NSD Overtime</div>
          <Button
            className="py-1 px-1 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const rowValue = parseFloat(row.getValue('otnsdHrs'))
      return (
        <div className="text-center font-medium">
          {rowValue === 0 ? '-' : rowValue}
        </div>
      )
    },
  },
  {
    accessorKey: 'totalHrs',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-1">
          <div className="text-center">Total</div>
          <Button
            className="py-1 px-1 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const rowValue = parseFloat(row.getValue('totalHrs'))
      return (
        <div className="text-center font-medium">
          {rowValue === 0 ? '-' : rowValue}
        </div>
      )
    },
  },
  {
    accessorKey: 'hourlyRate',
    header: ({ column }) => {
      return (
        <div className="flex-center gap-1">
          <div className="text-center">Hourly Rate</div>
          <Button
            className="py-1 px-1 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <LuArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('hourlyRate'))
      const formatted = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
      }).format(amount)

      return <div className="text-center font-medium">{formatted}</div>
    },
  },
]
