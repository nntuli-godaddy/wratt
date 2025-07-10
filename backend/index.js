import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import auth from './routes/auth.js'


dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/auth', auth)

const PORT = process.env.PORT



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})