import mongoose from 'mongoose'

export async function connectDB(url: string) {
  try {
    await mongoose.connect(url)
    console.log('Connected to MongoDB.')
  } catch (error) {
    console.log(error)
  }
}
