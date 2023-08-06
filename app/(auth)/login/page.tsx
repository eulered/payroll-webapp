'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <>
      <section className="flex-center flex-col min-h-screen w-full md:w-3/4 lg:w-2/3 md:border-r">
        <div className="flex-center flex-col w-full p-12 min-h-screen md:w-3/5 md:min-w-[350px] gap-10 md:gap-8">
          <div className="flex flex-col gap-2 min-w-full">
            <h2 className="text-3xl">Login</h2>
            <p className="text-muted-foreground">
              New Employee?
              <span className="text-accent ml-1">
                <Link href="/login">Contact admin for an account</Link>
              </span>
            </p>
          </div>

          {/* Login Form */}
          <div className="min-w-full">
            <form action="/sign-in" method="POST">
              <div className="mb-4">
                <Input type="text" placeholder="Enter email" />
              </div>
              <div className="mb-4">
                <Input type="password" placeholder="Enter password" />
              </div>

              <div className="mb-4">
                <Link
                  className="text-sm hover:text-accent hover:underline"
                  href="/forgotpassword"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button
                className="w-full text-white tracking-wider text-md bg-primary hover:opacity-80 hover:bg-primary transition"
                type="submit"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className="w-0 md:w-1/4 lg:w-1/3 ">
        <div className="min-h-screen hidden items-center -ml-[86px] md:flex">
          <h1 className="py-8 bg-background text-4xl font-poppins tracking-widest">
            PAYROLL
          </h1>
        </div>
      </section>
    </>
  )
}

export default LoginPage
