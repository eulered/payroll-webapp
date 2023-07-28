import Card from '@/components/Card'
import React from 'react'
import { CgTimelapse } from 'react-icons/cg'
import { TbClockHour10, TbClockMinus, TbCurrencyPeso } from 'react-icons/tb'

const UserStatsSection = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-5">
        <Card>
          <div className="flex justify-between items-center mb-4">
            <p>Regular Hours</p>
            <span className="text-xl">
              <TbClockHour10 />
            </span>
          </div>
          <div>
            <p className="font-semibold text-3xl">
              36
              <span className="font-medium text-2xl"> hrs</span>
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center mb-4">
            <p>Overtime</p>
            <span className="text-xl">
              <CgTimelapse />
            </span>
          </div>
          <div>
            <p className="font-semibold text-3xl">
              4<span className="font-medium text-2xl"> hrs</span>
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center mb-4">
            <p>Undertime</p>
            <span className="text-xl">
              <TbClockMinus />
            </span>
          </div>
          <div>
            <p className="font-semibold text-3xl">
              33
              <span className="font-medium text-2xl"> mins</span>
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center mb-4">
            <p>Current Salary</p>
            <span className="text-xl">
              <TbCurrencyPeso />
            </span>
          </div>
          <div>
            <p className="font-semibold text-3xl">P 20,123.69</p>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default UserStatsSection
