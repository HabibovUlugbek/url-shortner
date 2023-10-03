import express from 'express'
import { connectDB } from './connect'
import urlRoute from './routes/url'

const app = express()
const PORT: number = Number(process.env.PORT) || 3000

app.use(express.json())
app.use('/', urlRoute)

app.listen(PORT, async () => {
  await connectDB('mongodb://localhost:27017/url-shortener')
  console.log(`Server is running on port ${PORT}.`)
})
