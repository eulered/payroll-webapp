import React from 'react'
import Card from '@/components/Card'

const DashboardMiddle = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:gap-5">
        <div className="col-span-1 md:col-span-4">
          <Card>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in
              debitis nisi deleniti eius animi ut ad voluptate enim dicta, nulla
              fugit accusantium officia eum omnis ex rem quos aperiam earum,
              maiores provident voluptas sit ullam! Dolores saepe molestiae,
              eum, aperiam maxime vitae pariatur sed voluptatibus tempore neque
              quibusdam cum vel. Nam dolores sunt laborum atque cupiditate
              eligendi odit sed quis cumque, distinctio ratione dolorem, commodi
              voluptas, sapiente consectetur hic officiis iure quibusdam?
              Nostrum, vero quis. Hic iusto modi atque corporis eum recusandae
              error dolor in cumque blanditiis dolorum autem distinctio
              veritatis pariatur voluptas veniam qui repudiandae minima, nulla
              labore ut fugiat tempore ex. Doloremque quibusdam similique,
              aperiam unde dicta voluptates dolorem odio, dolore autem, deserunt
              corporis libero. Dolor, nisi.
            </p>
          </Card>
        </div>

        <div className="md:col-span-2 md:row-span-3">
          <Card>
            <div>
              <header>
                <p className="font-medium text-lg font-poppins">
                  Recent Requests
                </p>
                <p className="font-medium text-sm text-muted-foreground">
                  There are 3 recent requests
                </p>
              </header>
              <div></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default DashboardMiddle
