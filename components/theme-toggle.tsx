'use client'

import * as React from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-9 h-9 md:w-10 md:h-10 border rounded-full flex-center hover:bg-neutral/50 transition">
      <label className="daisy-swap daisy-swap-rotate w-full h-full rounded-full">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTheme(e.target.checked ? 'dark' : 'light')
          }
        />

        {/* sun icon */}
        <MdOutlineLightMode className="h-[1.2rem] w-[1.2rem] daisy-swap-off fill-current rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

        {/* moon icon */}
        <MdOutlineDarkMode className="absolute h-[1.2rem] w-[1.2rem] daisy-swap-on fill-current rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </label>
    </div>
  )
}

// <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <Button className="rounded-full" variant="outline" size="icon">
//       <MdOutlineLightMode className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <MdOutlineDarkMode className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   </DropdownMenuTrigger>
//   <DropdownMenuContent align="end">
//     <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
//     <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
//     <DropdownMenuItem onClick={() => setTheme('system')}>
//       System
//     </DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>
