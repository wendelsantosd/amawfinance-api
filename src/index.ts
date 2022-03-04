import cors from 'cors'
import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import path from 'path'
import { serve, setup } from 'swagger-ui-express'

import { config }  from './config'
import { swagger } from './docs'
import profilePictureRoutes from './routes/profilePictureRoutes'
import transactionRoutes from './routes/transactionRoutes'
import userRoutes from './routes/userRoutes'


const app = express()

app.use(cors({
    origin: '*'
}))
app.use(json())
app.use(urlencoded({ extended: true}))
app.use(morgan('dev'))
app.use(userRoutes)
app.use(profilePictureRoutes)
app.use(transactionRoutes)

app.use('/documentation', serve, setup(swagger))

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
)

app.listen(process.env.PORT || config.HTTP_SERVER_PORT, () => { console.log('Server is running!') })

export { app }