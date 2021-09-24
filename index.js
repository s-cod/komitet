import express from 'express'
import mongoose from 'mongoose'

import router from './routers/router.js'

const PORT = 3000
const DB_URL = `mongodb://localhost:27017/komitet`

const app = express()

app.use(express.json())
app.use('/', router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => {
      console.log('server started from PORT', PORT)
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()
