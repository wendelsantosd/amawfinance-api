import cors from 'cors'
import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import { serve, setup } from 'swagger-ui-express'

import { config }  from './config'
import { swagger } from './docs'
import userRoutes from './routes/userRoutes'


const app = express()

app.use(cors({
    origin: '*'
}))
app.use(json())
app.use(urlencoded({ extended: true}))
app.use(morgan('dev'))
app.use(userRoutes)

app.use('/documentation', serve, setup(swagger))

app.listen(config.HTTP_SERVER_PORT, () => { console.log('Server is running!') })

export { app }