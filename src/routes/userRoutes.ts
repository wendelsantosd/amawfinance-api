import { Router, Request, Response } from 'express'

import { userController } from '../controllers/userController'

const userRoutes = Router()

userRoutes.get('/', (req: Request, res: Response): void => {
    // res.redirect('http://localhost:3333/documentation/')
    res.json({message: 'api on'})
})

userRoutes.post('/user/auth', userController.auth)

export default userRoutes