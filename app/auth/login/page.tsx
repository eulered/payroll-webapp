import Card from '@/components/Card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { CgGoogle } from 'react-icons/cg'

const page = () => {
  return (
    <div className="flex-center h-screen w-full bg-zinc-950">
      <div
        className="flex-col flex-center gap-8 w-[400px] h-[400px]
                   border rounded-xl p-4 bg-zinc-900"
      >
        <p className="font-bold text-3xl">Welcome</p>
        <form action="" className="flex flex-col gap-4 w-[300px]">
          <Input className="w-" placeholder="Username or Email Address" />
          <Input type="password" placeholder="Password" />

          <Button>Continue</Button>

          <p className="text-center">or</p>
          <Button variant={'outline'}>
            <span className="mr-4">
              <CgGoogle />
            </span>{' '}
            Continue with Google
          </Button>
        </form>
      </div>
    </div>
  )
}

export default page
