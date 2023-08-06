import { Schema, model } from 'mongoose'

export interface Employee {
  name: string
  hourlyRate: number
}

const employeeSchema = new Schema<Employee>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    hourlyRate: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export default model('Employee', employeeSchema)
