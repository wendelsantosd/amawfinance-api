import cors from 'cors'
import express, { json, urlencoded } from 'express'
import morgan from 'morgan'

import userRoutes from './routes/userRoutes' 

const app = express()

app.use(cors({
    origin: '*'
}))
app.use(json())
app.use(urlencoded({ extended: true}))
app.use(morgan('dev'))
app.use(userRoutes)
app.listen(3333, () => {
    console.log('server is running')
})

export { app }