import * as React from 'react'
import { RxCaretSort, RxChevronDown } from 'react-icons/rx'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type Employee = {
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

export const employees: Employee[] = [
  {
    id: 1,
    name: 'Molavin, Jorelyn E.',
    undertime: 0,
    normalHrs: 10,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 516.75,
  },
  {
    id: 2,
    name: 'Reyes, Jed Paul S.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 516.75,
  },
  {
    id: 3,
    name: 'Almonte, Kayciline M.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 516.75,
  },
  {
    id: 4,
    name: 'Buan, Bernard A.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 367.46,
  },
  {
    id: 5,
    name: 'Cloma, Mark Anthony B.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 367.46,
  },
  {
    id: 6,
    name: 'Escobar, Jamie Rose Ann Y.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 367.46,
  },
  {
    id: 7,
    name: 'Mendoza, Arnold U.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 367.46,
  },
  {
    id: 8,
    name: 'Villamor, Sweet F.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 367.46,
  },
  {
    id: 9,
    name: 'Bravo, John Patrick M.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 252.63,
  },
  {
    id: 10,
    name: 'Daproza, Danielle Louise H.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 235.41,
  },
  {
    id: 11,
    name: 'Maarat, Jeffrey G.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 384.69,
  },
  {
    id: 12,
    name: 'Almazan, Joshua F.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 264.11,
  },
  {
    id: 13,
    name: 'Sornet, Mary Pauline G.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 264.11,
  },
  {
    id: 14,
    name: 'Banate, Haydee M.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 264.11,
  },
  {
    id: 15,
    name: 'Manahan, Ariza Mei H.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 252.63,
  },
  {
    id: 16,
    name: 'Ancheta, Ellaine S.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 516.75,
  },
  {
    id: 17,
    name: 'Manlangit, Shenna Q.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 516.75,
  },
  {
    id: 18,
    name: 'Facunla, Maricar O.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 218.18,
  },
  {
    id: 19,
    name: 'Guerzon, Michael E.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 218.18,
  },
  {
    id: 20,
    name: 'Millena, Aiyana Mari M.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 218.18,
  },
  {
    id: 21,
    name: 'Rullan, Michael Edward E.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 246.89,
  },
  {
    id: 22,
    name: 'Claros, Jude Ian',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 172.25,
  },
  {
    id: 23,
    name: 'Garcia, Danica Aileen B.',
    undertime: 0,
    normalHrs: 0,
    otHrs: 0,
    nsdHrs: 0,
    otnsdHrs: 0,
    totalHrs: 0,
    hourlyRate: 172.25,
  },
]

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Employee Name',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'undertime',
    header: 'Undertime',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'normalHrs',
    header: 'Regular Hours',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'otHrs',
    header: 'Overtime',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'nsdHrs',
    header: 'NSD Hours',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'otnsdHrs',
    header: 'NSD Overtime',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'totalHrs',
    header: 'Total Hours',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },

  {
    accessorKey: 'totalHrs',
    header: 'Total Hours',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('totalHrs'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]