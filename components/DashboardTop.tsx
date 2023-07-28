import React from 'react'
import Card from '@/components/Card'

import { RiGroupLine } from 'react-icons/ri'
import { RiTimeLine } from 'react-icons/ri'
import { CgTimelapse } from 'react-icons/cg'
import { TbCurrencyPeso } from 'react-icons/tb'

const DashboardTop = () => {
  return (
    <>
      <section className="mb-5">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          <Card>
            <div className="flex justify-between items-center mb-4">
              <p>Employees Working</p>
              <span className="text-xl">
                <RiGroupLine />
              </span>
            </div>
            <div>
              <p className="font-semibold text-3xl">
                20
                <span className="font-medium text-2xl">/23</span>
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between items-center mb-4">
              <p>Total Working Hours</p>
              <span className="text-xl">
                <RiTimeLine />
              </span>
            </div>
            <div>
              <p className="font-semibold text-3xl">
                124
                <span className="font-medium text-2xl"> hrs</span>
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between items-center mb-4">
              <p>Total Overtime Hours</p>
              <span className="text-xl">
                <CgTimelapse />
              </span>
            </div>
            <div>
              <p className="font-semibold text-3xl">
                30
                <span className="font-medium text-2xl"> hrs</span>
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between items-center mb-4">
              <p>Total Payroll</p>
              <span className="text-xl">
                <TbCurrencyPeso />
              </span>
            </div>
            <div>
              <p className="font-semibold text-3xl">P 120,123.69</p>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

export default DashboardTop
